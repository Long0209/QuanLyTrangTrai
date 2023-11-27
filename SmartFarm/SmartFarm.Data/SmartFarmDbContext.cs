using System.Data;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SmartFarm.Data.Entities;

namespace SmartFarm.Data;

public class SmartFarmDbContext : IdentityDbContext<User,Role,string> {
    public SmartFarmDbContext(DbContextOptions options) : base(options) {
    
    }

    
    public DbSet<EspData> EspData {get; set;}
    public DbSet<EspDevice> EspDevices {get; set;}
    
    protected override void OnModelCreating(ModelBuilder builder) {
        base.OnModelCreating(builder);
        
        builder.Entity<Role>().HasData(
            new Role("mgr","manager"),
            new Role("usr","user")
        );

        var has = new PasswordHasher<User>();
        builder.Entity<User>().HasData(
            new User{
                Id = "admin",
                UserName = "admin",
                PasswordHash = has.HashPassword(null, "12345678"),
                FirstName = "admin",
                LastName = "01"
            }
        ); 

        builder.Entity<IdentityUserRole<string>>().HasData(
            new IdentityUserRole<string>() {
                UserId = "admin",
                RoleId = "mgr",
            });
    }
}
