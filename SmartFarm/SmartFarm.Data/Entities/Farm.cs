using System.ComponentModel.DataAnnotations.Schema;

namespace SmartFarm.Data.Entities;

public class Farm {
    public int Id {get; set;}
    public string Name {get; set;}
    public string Address {get; set;}
    [ForeignKey("AspNetUser.Id")]
    public string UserId {get; set;}
}
