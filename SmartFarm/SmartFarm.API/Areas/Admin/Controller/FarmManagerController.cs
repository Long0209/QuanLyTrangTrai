using Microsoft.AspNetCore.Mvc;
using SmartFarm.API.Models;
using SmartFarm.API.Models.Farm;
using SmartFarm.Data;
using SmartFarm.Data.Entities;

namespace SmartFarm.API.Areas.Admin.Controller;

[ApiController]
[Route("api/[controller]")]
public class FarmManagerController : ControllerBase {
    private readonly SmartFarmDbContext _context;
    public FarmManagerController(SmartFarmDbContext context) {
        _context = context;
    }

    [HttpPost]
    [Route("get-all-farm")]
    public IActionResult GetAllFarm([FromBody] PageInputModel pageInputModel) {
        var dataSource = _context.Farms;

        var result = new PagedListViewModel<Farm>(dataSource, pageInputModel.PageIndex, pageInputModel.PageSize);

        return Ok(result);
    }

    [HttpPost]
    [Route("add-new-farm")]
    public IActionResult AddNewFarm([FromBody] AddFarmViewModel addFarmViewModel) {
        var farm = new Farm {
            Name = addFarmViewModel.Name,
            Address = addFarmViewModel.Address,
            UserId = addFarmViewModel.UserId
        };

        try {
            _context.Farms.Add(farm);
            _context.SaveChanges();
            return Ok(new {Message = "Farm added sucessfully"});
        } catch {
            return BadRequest(new {Message = "Internal server error"});
        }

    }
}
