using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using SmartFarm.API.Extensions.PagedList;
using SmartFarm.API.Models;
using SmartFarm.API.Models.Identity;
using SmartFarm.Data;
using SmartFarm.Data.Entities;

namespace SmartFarm.API.Areas.Admin;

[Area("admin")]
[ApiController]
[Route("api/[controller]")]
public class UserManager : ControllerBase {
    private readonly SmartFarmDbContext _context;
    private readonly UserManager<SmartFarm.Data.Entities.User> _userManager;
    public UserManager(
        SmartFarmDbContext context,
        UserManager<SmartFarm.Data.Entities.User> userManager) {
        _context = context;
        _userManager = userManager;
    }

    [HttpGet]
    [Route("get-user")]
    public IActionResult GetUser([FromBody] PageInputModel pageInputModel) {
        var dataSource = _context.Users;
        var result = dataSource.ToPagedList<User>(pageInputModel.PageIndex, pageInputModel.PageSize);
        return Ok(result);
    }

    [HttpPost]
    [Route("create-new-user")]
    public async Task<IActionResult> CreateNewUser(SignUpViewModel signUpViewModel) {
        if (ModelState.IsValid) {
            var user = new User {
                UserName = signUpViewModel.Username,
                Email = signUpViewModel.Email,
                FirstName = signUpViewModel.FirstName,
                LastName = signUpViewModel.LastName,
            };

            var result = await _userManager.CreateAsync(user, signUpViewModel.Password);

            if (result.Succeeded) {

                // Return a success response or other relevant information.
                return Ok(new { Message = "Signup successful!" });
            }
            // If the creation of the user failed, return the errors.
            return BadRequest(result.Errors);
        }
        
         // If ModelState is not valid, return a 400 Bad Request with validation errors.
        return BadRequest(ModelState);
    }
}
