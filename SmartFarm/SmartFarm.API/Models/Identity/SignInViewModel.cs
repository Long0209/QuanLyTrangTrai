using System.ComponentModel.DataAnnotations;

namespace SmartFarm.API.Models.Identity;

public class SignInViewModel {
    [Required(ErrorMessage = "Email or phone number is required.")]
    [Display(Name = "Email or PhoneNumber")]
    public string EmailOrUserName { get; set; }

    [Required(ErrorMessage = "Password is required.")]
    [DataType(DataType.Password)]
    [Display(Name = "Password")]
    public string Password { get; set; }
}
