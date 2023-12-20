using System.ComponentModel.DataAnnotations;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartFarm.API.Models.Identity;
using SmartFarm.Data.Entities;

namespace SmartFarm.API.Controllers.V1.Identity;

[Authorize]
[ApiController]
[Route("api/v1/identity/auth")]
public class AuthenticationController : ControllerBase {
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly IMapper _mapper;

    public AuthenticationController(
        UserManager<User> userManager,
        SignInManager<User> signInManager,
        IMapper mapper) {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
    }

    /// <summary>
    /// Authenticates a user based on the provided sign-in view model.
    /// </summary>
    /// <param name="signInViewModel">The sign-in view model containing user login information.</param>
    /// <returns>
    /// - 200 OK : if user login successful
    /// - 401 BAD REQUES : if user login fail
    /// </returns>
    [HttpPost]
    [Route("login")]
    [AllowAnonymous]
    public async Task<IActionResult> Login([FromBody] SignInViewModel signInViewModel) {
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
            // check if user sign in by user name
            else {
                user = await _userManager.FindByNameAsync(signInViewModel.EmailOrUserName);
            }

            // return bad request when don't find user math user
            if(user == null) {
                return BadRequest(new {Message = "Invalid loggin atempt."});
            }

            var result = await _signInManager.PasswordSignInAsync(
                user,
                signInViewModel.Password,
                isPersistent: true,
                lockoutOnFailure: false);

            // return 200 reponse when login success
            if (result.Succeeded) {
                return Ok(new { Message = "Signin successful!" });
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
    /// Logout the currently authenticated user
    /// </summary>
    /// <returns>
    /// - 200 Ok: If Signout is succesful
    /// </returns>
    [HttpPost]
    [Route("log-out")]
    public async Task<IActionResult> LogOut(){
        // Signout currently authenticated user
        await _signInManager.SignOutAsync();

        // Return a succes reponsive
        return Ok(new {Message = "Logout successful."});
    }

    /// <summary>
    /// Registers a new user based on the provided signup view model.
    /// </summary>
    /// <param name="signUpViewModel">The signup view model containing user registration information.</param>
    /// <returns>An asynchronous task representing the HTTP response for the signup operation.</returns>
    [HttpPost]
    [Route("register")]
    [AllowAnonymous]
    public async Task<IActionResult> Register([FromBody]SignUpViewModel signUpViewModel) {
        if (ModelState.IsValid) {
            var user = _mapper.Map<User>(signUpViewModel);

            var result = await _userManager.CreateAsync(user, signUpViewModel.Password);

            if (result.Succeeded) {
                // Sign in the user after they are created
                await _signInManager.SignInAsync(user, isPersistent: false);

                // Return a success response or other relevant information.
                return Ok(new { Message = "Register sucessful." });
            }
            // If the creation of the user failed, return the errors.
            return BadRequest(new {Message = result.Errors});
        }
        
         // If ModelState is not valid, return a 400 Bad Request with validation errors.
        return BadRequest(ModelState);
    }
}
