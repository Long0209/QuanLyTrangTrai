using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using SmartFarm.Data;
using SmartFarm.API.Models;
using SmartFarm.Data.Entities;
using SmartFarm.API.Models.EspDevices;
using Microsoft.EntityFrameworkCore;
using SmartFarm.API.Extensions.PagedList;
using AutoMapper;

namespace SmartFarm.API.Areas.Admin.Controller;

[ApiController]
[Route("api/[controller]")]
public class EspDevicesManager : ControllerBase {
    private readonly SmartFarmDbContext _context;
    private readonly IMapper _mapper;
    public EspDevicesManager(
        SmartFarmDbContext context,
        IMapper mapper) {
        _context = context;
        _mapper = mapper;
    }

    /// <summary>
    /// Retrieves a paginated list of ESP devices.
    /// </summary>
    /// <param name="pageIndex">The index of the requested page (default is 1).</param>
    /// <param name="pageSize">The number of items per page (default is 100).</param>
    /// <returns>
    ///   A JSON object containing information about the paginated ESP devices, including:
    ///   - TotalItems: Total number of ESP devices.
    ///   - PageIndex: Current page index.
    ///   - PageSize: Number of items per page.
    ///   - TotalPages: Total number of pages based on the page size.
    ///   - EspDevices: List of ESP devices for the current page.
    /// </return>
    [HttpGet]
    [Route("get-all-devices")]
    public IActionResult GetAllDevices(int pageIndex = 1, int pageSize = 100) {
        try {
            // Create reponsive object
            var dataSource = _context.EspDevices;
            var result = new PagedListViewModel<EspDevice>(dataSource, pageIndex, pageSize);

            return Ok(result);
        }
        catch (Exception ex) {
            // Log the exception or handle it appropriately
            return StatusCode(500, "Internal server error");
        }
    }
    
    /// <summary>
    /// Retrieves a paginated list of ESP devices owned by specific user.
    /// </summary>
    /// <param name="pageIndex">The index of the requested page (default is 1).</param>
    /// <param name="pageSize">The number of items per page (default is 100).</param>
    /// <param name="userId">The id of user</param>
    /// <returns>
    ///   A JSON object containing information about the paginated ESP devices, including:
    ///   - TotalItems: Total number of ESP devices.
    ///   - PageIndex: Current page index.
    ///   - PageSize: Number of items per page.
    ///   - TotalPages: Total number of pages based on the page size.
    ///   - EspDevices: List of ESP devices for the current page.
    /// </return>
    [HttpGet]
    [Route("get-devices-by-user")]
    public IActionResult GetDevicesByUser (string userId, int pageIndex = 1, int pageSize = 100) {
        try {
            // Create reponsive object
            var dataSource = _context.EspDevices
                .Where(p => p.UserId == userId);
            var result = new PagedListViewModel<EspDevice>(dataSource, pageIndex, pageSize);

            return Ok(result);
        }
        catch (Exception ex) {
            // Log the exception or handle it appropriately
            return StatusCode(500, "Internal server error");
        }
    }

    /// <summary>
    /// Retrieves a paginated list of ESP devices in specific farm.
    /// </summary>
    /// <param name="pageIndex">The index of the requested page (default is 1).</param>
    /// <param name="pageSize">The number of items per page (default is 100).</param>
    /// <param name="farmId">The id of farm</param>
    /// <returns>
    ///   A JSON object containing information about the paginated ESP devices, including:
    ///   - TotalItems: Total number of ESP devices.
    ///   - PageIndex: Current page index.
    ///   - PageSize: Number of items per page.
    ///   - TotalPages: Total number of pages based on the page size.
    ///   - EspDevices: List of ESP devices for the current page.
    /// </return>
    [HttpGet]
    [Route("get-devices-by-farm")]
    public IActionResult GetDevicesByFarm (int farmId, int pageIndex = 1, int pageSize = 100) {
        try {
            // Create reponsive object
            var dataSource = _context.EspDevices
                .Where(p => p.FarmId == farmId);
            var result = new PagedListViewModel<EspDevice>(dataSource, pageIndex, pageSize);
            
            // test paged list extension
            var res = dataSource.ToPagedList<EspDevice>(pageIndex, pageSize);
            return Ok(res);
        }
        catch (Exception ex) {
            // Log the exception or handle it appropriately
            return StatusCode(500, "Internal server error");
        }
    }


    [HttpPost]
    [Route("add-new-device")]
    public IActionResult AddNewDevice (AddEspDeviceModel addEspDeviceModel) {
        var espDevice = new EspDevice {
            Name = addEspDeviceModel.Name,
            UserId = addEspDeviceModel.UserId,
            FarmId = addEspDeviceModel.FarmId,
            Location = addEspDeviceModel.Location
        };

        _context.EspDevices.Add(espDevice);
        try {
            _context.SaveChanges();
            return Ok(new {Message = "Device added successfully"});
        }
        catch (System.Exception){
            return BadRequest(new {Message = "Internal server errors"});
            throw;
        }
    }
}
