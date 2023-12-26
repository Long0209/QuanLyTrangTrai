using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartFarm.API.Extensions.PagedList;
using SmartFarm.API.Extensions.PagedList.Models;
using SmartFarm.Data;

namespace SmartFarm.API.Controllers.V1.Customer;

[Authorize]
[ApiController]
[Route("api/v1/customer/farm")]
public class FarmController : ControllerBase {
    private readonly SmartFarmDbContext _context;

    public FarmController(
        SmartFarmDbContext context){
            _context = context;
        }

    /// <summary>
    /// Retrives list of farms owned by current logged in user
    /// </summary>
    /// <param name="pageInputModel">input model for pagination</param>
    /// <returns>
    /// </returns>
    [HttpGet]
    [Route("owned-farms")]
    public async Task<IActionResult> GetOwnedFarms([FromQuery] PageInputModel pageInputModel) {
        // Get id of curent logged in user
        var userId = User.FindFirstValue(ClaimTypes.Name);
        
        var query = _context.Farms.Where(p => p.UserId == userId);

        var result = query.ToPagedList(pageInputModel);

        var responseObj = new  {
            PageDetails = result.PageDetails,
            Data = result.Data
        };

        return Ok(responseObj);
    }
}
