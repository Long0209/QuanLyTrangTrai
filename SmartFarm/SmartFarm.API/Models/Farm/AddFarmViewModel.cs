using System.ComponentModel.DataAnnotations;
using Microsoft.Net.Http.Headers;

namespace SmartFarm.API.Models.Farm;

public class AddFarmViewModel {
    [Required]
    public string Name {get; set;}
    [Required]
    public string Address {get; set;}
    [Required]
    public string UserId {get; set;}
}
