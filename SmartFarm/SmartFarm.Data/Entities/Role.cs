using Microsoft.AspNetCore.Identity;

namespace SmartFarm.Data.Entities;

public class Role : IdentityRole{
    public Role() : base() {}
    public Role(string roleName) : base(roleName) {
        
    }

    public Role(string roleId, string roleName) {
        this.Id = roleId;
        this.Name = roleName;
    }
}
