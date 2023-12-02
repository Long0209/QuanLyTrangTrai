using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace SmartFarm.Data.Entities;

public class User : IdentityUser {
    [PersonalData]
    public string FirstName {get; set;}
    [PersonalData]
    public string LastName {get; set;}
}
