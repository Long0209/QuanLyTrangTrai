using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartFarm.API.Extensions.PagedList;
using SmartFarm.API.Extensions.PagedList.Models;
using SmartFarm.Data;

namespace SmartFarm.API.Areas.UserArea.Controllers;

[Authorize]
[ApiController]
[Area("user")]
[Route("api/[area]/[controller]")]
public class EspDevicesController : ControllerBase {
    private readonly SmartFarmDbContext _dbContext;
    public EspDevicesController(
        SmartFarmDbContext context) {
            _dbContext = context;
    }

    /// <summary>
    /// Retrieves information about ESP devices owned by logged in user
    /// </summary>
    /// <returns>List of esp owned by the logged in user</returns>
    [HttpGet]
    [Route("get-esp-device-owner")]
    public IActionResult GetEspDeviceOwner([FromQuery] PageInputModel pageInputModel) {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        var dataSource = _dbContext.EspDevices
            .Where(p => p.UserId == userId);

        var result = dataSource.ToPagedList(pageInputModel);
        return Ok(result);
    }


    /// <summary>
    /// Retrieves ESP data for a specified device owned by the authenticated user.
    /// </summary>
    /// <param name="deviceId">The ID of the ESP device for which data is to be retrieved.</param>
    /// <param name="resultSize">The number of results to retrieve (optional, default is 500).</param>
    /// <returns>An json result containing ESP data for the specified device.</returns>
    [HttpGet]
    [Route("get-esp-data")]
    [Authorize]
    public IActionResult GetEspData(int deviceId, int resultSize = 200) {
        // Obtain the user ID from the authenticated user's claims
        var userId = HttpContext.User.FindFirstValue(ClaimTypes.NameIdentifier);

        // Check if the user owns the specified device
        var device = _dbContext.EspDevices
            .Where(p => p.UserId == userId && p.Id == deviceId)
            .FirstOrDefault();

        // If the user doesn't own the device, return a BadRequest response
        if (device == null){
            return BadRequest(new { message = "Device not found or user doesn't own the device." });
        }

        // Retrieve the last 1000 records of ESP data for the specified device
        var result = _dbContext.EspData
            .Where(m => m.DeviceId == deviceId)
            .Take(resultSize)
            .ToList();

        // Return the ESP data in the HTTP response
        return Ok(result);
    }
}
