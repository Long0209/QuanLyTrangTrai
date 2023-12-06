using System.ComponentModel;

namespace SmartFarm.API.Extensions.PagedList.Models;

public class PageInputModel {
    [DefaultValue(1)]
    public int PageIndex {get; set;} = 1;
    [DefaultValue(50)]
    public int PageSize {get; set;} = 50;
}
