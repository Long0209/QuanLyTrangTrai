using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;


namespace SmartFarm.Data.Entities;

public class EspDevice {
    public int Id {get; set;}
    [ForeignKey("AspNetUser.Id")]
    [Required]
    public string UserId {get; set;}
    public string Name {get; set;}
    public string Location {get; set;}
    [ForeignKey("Farm.Id")]
    public int FarmId {get; set;}
}
