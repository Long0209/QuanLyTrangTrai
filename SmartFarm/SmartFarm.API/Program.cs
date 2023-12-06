using SmartFarm.Data;
using SmartFarm.Data.Entities;
using Microsoft.EntityFrameworkCore.SqlServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using AutoMapper;
using SmartFarm.API.Extensions.AutoMapper;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Add database context to services
builder.Services.AddDbContext<SmartFarmDbContext>(options => {
    options.UseSqlServer(builder.Configuration.GetConnectionString("test"));
});

// Add identity framework to services
builder.Services.AddIdentity<User,Role>()
    .AddEntityFrameworkStores<SmartFarmDbContext>();

// Config identity options
builder.Services.Configure<IdentityOptions> (options => {
    // Config password
    options.Password.RequireDigit = false; 
    options.Password.RequireLowercase = false; 
    options.Password.RequireNonAlphanumeric = false; 
    options.Password.RequireUppercase = false; 
    options.Password.RequiredLength = 8; 
    options.Password.RequiredUniqueChars = 1; 

    // Config logout 
    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes (5); 
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;

    // Config user
    options.User.AllowedUserNameCharacters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-._@+";
    options.User.RequireUniqueEmail = true;

    // Config sign in
    options.SignIn.RequireConfirmedEmail = false;           
    options.SignIn.RequireConfirmedPhoneNumber = false;   
});

// AddCors to services 
builder.Services.AddCors(options => {
    options.AddPolicy("Default", builder => {
            builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
        });
}); 

//Add auto mapper to services 
builder.Services.AddAutoMapper(typeof(SmartFarm.API.Extensions.AutoMapper.AutoMapperConfig));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.UseCors("Default");

app.Run();
