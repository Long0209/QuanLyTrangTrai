using System.ComponentModel.DataAnnotations;

namespace SmartFarm.API.Models.Identity;

public class SignUpViewModel {
    [Required(ErrorMessage = "Username is required.")]
    [Display(Name = "Username")]
    [StringLength(20, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 4)]
    public string Username { get; set; }

    [Required(ErrorMessage = "Email is required.")]
    [EmailAddress(ErrorMessage = "Invalid email address.")]
    [Display(Name = "Email")]
    public string Email { get; set; }

    [Required(ErrorMessage = "Password is required.")]
    [DataType(DataType.Password)]
    [StringLength(20, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 8)]
    [Display(Name = "Password")]
    public string Password { get; set; }

    [DataType(DataType.Password)]
    [Display(Name = "Confirm Password")]
    [Compare("Password", ErrorMessage = "The password and confirmation password do not match.")]
    public string ConfirmPassword { get; set; }

    [DataType(DataType.PhoneNumber, ErrorMessage = "Invalid phone number.")]
    [Required(ErrorMessage = "Phone number is required.")]
    public string PhoneNumber {get; set;}

    [Required(ErrorMessage = "First name is required.")]
    [StringLength(100, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 2)]
    public string FirstName {get; set;}

    [Required(ErrorMessage = "Password is required.")]
    [StringLength(50, ErrorMessage = "The {0} must be at least {2} characters long.", MinimumLength = 2)]
    public string LastName {get; set;}
}
