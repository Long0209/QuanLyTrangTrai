using AutoMapper;
using SmartFarm.API.Models.Identity;
using SmartFarm.Data.Entities;

namespace SmartFarm.API.Extensions.AutoMapper;

public class AutoMapperConfig : Profile {
    public AutoMapperConfig () {
        CreateMap<SignUpViewModel, User>();
    }
}
