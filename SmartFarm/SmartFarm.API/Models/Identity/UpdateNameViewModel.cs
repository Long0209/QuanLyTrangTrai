using System.ComponentModel.DataAnnotations;

namespace SmartFarm.API.Models.Identity;

public class UpdateNameViewModel {
    [Required(ErrorMessage = "New first name is required")]
    public string FirstName {get; set;}

    [Required(ErrorMessage = "New last name is required")]
    public string LastName {get; set;}
}
