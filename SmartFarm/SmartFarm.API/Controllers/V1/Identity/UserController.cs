using System.Security.Claims;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SmartFarm.API.Models.Identity;
using SmartFarm.Data.Entities;

namespace SmartFarm.API.Controllers.V1.Identity;

[Authorize]
[ApiController]
[Route("api/v1/identity/user")]
public class UserController : ControllerBase {
    private readonly UserManager<User> _userManager;
    private readonly SignInManager<User> _signInManager;
    private readonly IMapper _mapper;
    public UserController(
        UserManager<User> userManager,
        SignInManager<User> signInManager,
        IMapper mapper) {
            _userManager = userManager;
            _signInManager = signInManager;
            _mapper = mapper;
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
    [Route("password")]
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

    [HttpGet]
    [Route("user-info")]
    public async Task<IActionResult> GetUserInformation(){
        var user = await _userManager.GetUserAsync(User);
        var responseObj = _mapper.Map<UserViewModel>(user);
        return Ok(responseObj);
    }
}
