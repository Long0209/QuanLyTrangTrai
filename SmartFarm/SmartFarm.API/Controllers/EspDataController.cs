using System.Security.Claims;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartFarm.Data;
using Microsoft.AspNetCore.Identity;

namespace SmartFarm.API.Controllers;

// API to access espdata
[ApiController]
[Route("api/[controller]")]
[Authorize]
public class EspDataController : ControllerBase {
    private readonly SmartFarmDbContext _dbContext;
    public EspDataController(
        SmartFarmDbContext context) {

            _dbContext = context;
    }

    /// <summary>
    /// Retrieves information about ESP devices owned by the authenticated user
    /// </summary>
    /// <returns>List of esp owned by the user</returns>
    [HttpGet]
    [Route("get-esp-device-owner")]
    public IActionResult GetEspDeviceOwner() {
        var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);

        var result = _dbContext.EspDevices
            .Where(p => p.UserId == userId)
            .ToList();
        
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
    public IActionResult GetEspData(int deviceId, int? resultSize) {
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

        // Set a default result size of 500 if not specified or negative
        int _resultSize = resultSize.HasValue && resultSize > 0 ? resultSize.Value : 500;

        // Retrieve the last 1000 records of ESP data for the specified device
        var result = _dbContext.EspData
            .Where(m => m.DeviceId == deviceId)
            .Take(_resultSize)
            .ToList();

        // Return the ESP data in the HTTP response
        return Ok(result);
    }
}
