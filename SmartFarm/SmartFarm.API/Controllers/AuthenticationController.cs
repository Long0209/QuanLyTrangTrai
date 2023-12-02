using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using SmartFarm.Data.Entities;
using SmartFarm.API.Models.Identity;
using System.Security.Claims;
using System.ComponentModel.DataAnnotations;

namespace SmartFarm.API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class AuthenticationController : ControllerBase {
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    
    public AuthenticationController(
        UserManager<User> userManager,
        SignInManager<User> signInManager) {
            _userManager = userManager;
            _signInManager = signInManager;
    }

    /// <summary>
    /// Registers a new user based on the provided signup view model.
    /// </summary>
    /// <param name="signUpViewModel">The signup view model containing user registration information.</param>
    /// <returns>An asynchronous task representing the HTTP response for the signup operation.</returns>
    [HttpPost]
    [Route("sign-up")]
    public async Task<IActionResult> SignUp([FromBody]SignUpViewModel signUpViewModel) {
        if (ModelState.IsValid) {
            var user = new User {
                UserName = signUpViewModel.Username,
                Email = signUpViewModel.Email,
                FirstName = signUpViewModel.FirstName,
                LastName = signUpViewModel.LastName,
            };

            var result = await _userManager.CreateAsync(user, signUpViewModel.Password);

            if (result.Succeeded) {
                // Optionally sign in the user after they are created
                await _signInManager.SignInAsync(user, isPersistent: false);

                // Return a success response or other relevant information.
                return Ok(new { Message = "Signup successful!" });
            }
            // If the creation of the user failed, return the errors.
            return BadRequest(result.Errors);
        }
        
         // If ModelState is not valid, return a 400 Bad Request with validation errors.
        return BadRequest(ModelState);
    }

    /// <summary>
    /// Authenticates a user based on the provided sign-in view model.
    /// </summary>
    /// <param name="signInViewModel">The sign-in view model containing user login information.</param>
    /// <returns>An asynchronous task representing the HTTP response for the sign-in operation.</returns>
    [HttpPost]
    [Route("sign-in")]
    public async Task<IActionResult> SignIn([FromBody] SignInViewModel signInViewModel) {
        if (ModelState.IsValid) {
            var user = new User();

            var phoneAttribute = new PhoneAttribute();
            var emailAddressAttribute = new EmailAddressAttribute();
            // check if user sign in by email
            if(emailAddressAttribute.IsValid(signInViewModel.EmailOrUserName)) {
                user = await _userManager.FindByEmailAsync(signInViewModel.EmailOrUserName);
            } 
            // check if user sign in by phone number 
            else if(phoneAttribute.IsValid(signInViewModel.EmailOrUserName)) {
                user = await _userManager.Users
                    .Where(p => p.PhoneNumber == signInViewModel.EmailOrUserName)
                    .FirstOrDefaultAsync();
            }
            // if user sign in by user name
            else {
                user = await _userManager.FindByNameAsync(signInViewModel.EmailOrUserName);
            }

            if(user == null) {
                return BadRequest(new {Error = "Username or password wrong"});
            }

            var result = await _signInManager.PasswordSignInAsync(
                user,
                signInViewModel.Password,
                isPersistent: false,
                lockoutOnFailure: false);

            if (result.Succeeded) {
                return Ok(new { Message = "Signin successful!" });
            }

            if (result.RequiresTwoFactor) {
                // Handle two-factor authentication (if implemented)
                return StatusCode(401, new { Message = "Two-factor authentication required." });
            }

            if (result.IsLockedOut) {
                // Handle account lockout (if implemented)
                return StatusCode(401, new { Message = "Account locked out. Please try again later." });
            }

            // Login failed
            return StatusCode(401, new { Message = "Invalid login attempt." });
        }

        return BadRequest(ModelState);
    }

    /// <summary>
    /// Sign out the currently authenticateduser
    /// </summary>
    /// <returns>
    /// - 404 Ok: If Signout is succesful
    /// </returns>
    [HttpPost]
    [Route("sign-out")]
    public async Task<IActionResult> SignOut(){
        // Signout currently authenticated user
        await _signInManager.SignOutAsync();

        // Return a succes reponsive
        return Ok(new {Message = "SignOut successful"});
    }


    /// <summary>
    /// Handles HTTP PATCH requests to update the password for the authenticated user.
    /// </summary>
    /// <param name="updatePasswordViewModel">A model containing the old and new passwords.</param>
    /// <returns>
    /// - 200 OK: If the password is updated successfully.
    /// - 400 Bad Request: If the ModelState is invalid or if there are errors during the password change.
    /// - 404 Not Found: If the user associated with the authenticated identity is not found.
    /// </returns>
    [HttpPatch]
    [Route("update-password")]
    public async Task<IActionResult> UpdatePassword([FromBody] UpdatePasswordViewModel updatePasswordViewModel){
    if (ModelState.IsValid) {
        var user = await _userManager.FindByNameAsync(User.Identity.Name);

        if (user == null) {
            return NotFound(new { Message = "User not found." });
        }

        var result = await _userManager.ChangePasswordAsync(user, updatePasswordViewModel.OldPassword, updatePasswordViewModel.NewPassword);

        if (result.Succeeded){
            return Ok(new { Message = "Password updated successfully." });
        }

        return BadRequest(result.Errors);
    }

    return BadRequest(ModelState);
}

    /// <summary>
    /// Handles HTTP PATCH requests to update the name for the authenticated user.
    /// </summary>
    /// <param name="updateNameViewModel">A model containing the new first and last name.</param>
    /// <returns>
    /// - 200 OK: If the name is updated successfully.
    /// - 401 Bad Request: If the ModelState is invalid or if there are errors during the name change.
    /// - 404 Not Found: If the user associated with the authenticated identity is not found.
    /// </returns>
    [HttpPatch]
    [Route("update-name")]
    public async Task<IActionResult> UpdateName([FromBody] UpdateNameViewModel updateNameViewModel) {
        if (ModelState.IsValid) {
            var user = await _userManager.FindByNameAsync(User.Identity.Name);

            if (user == null) {
                return NotFound(new { Message = "User not found." });
            }

            user.FirstName = updateNameViewModel.FirstName;
            user.LastName = updateNameViewModel.LastName;
            var result = await _userManager.UpdateAsync(user);

            if (result.Succeeded){
                return Ok(new { Message = "Password updated successfully." });
        }

        return BadRequest(result.Errors);
    }

    return BadRequest(ModelState);
    }

    /// <summary>
    /// Retrives informaton about currently authenticated user .
    /// </summary>
    /// <returns>
    /// - 404 Ok: Return json result of information about user.
    /// </returns>
    [HttpPost]
    [Route("get-user-info")]
    public async Task<IActionResult> GetUserInfo() {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        if (userId == null){
            return Unauthorized(new { Message = "User not authenticated." });
        }

        var user = await _userManager.FindByIdAsync(userId);

        if (user == null){
            return NotFound(new { Message = "User not found." });
        }

        
        var userInfo = new {
            UserId = user.Id,
            UserName = user.UserName,
            PhoneNumber = user.PhoneNumber,
            Email = user.Email,
            FirstName = user.FirstName,
            LastName = user.LastName,
        };

        return Ok(userInfo);
    }
}
