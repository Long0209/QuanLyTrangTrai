namespace SmartFarm.API.Models;

public class PagedListViewModel<dataType> {
    public PagedListViewModel() {

    }

    public PagedListViewModel (IQueryable<dataType> dataSource, int pageIndex, int pageSize){
        this.TotalItems = dataSource.Count();
        this.TotalPages = (int)Math.Ceiling((double)TotalItems / pageSize);
        this.PageSize = pageSize;
        this.PageIndex = pageIndex;
        this.Data = dataSource
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .ToList();
    }
    
    public int TotalItems {get; set;}
    public int PageIndex {get; set;}
    public int PageSize {get; set;}
    public int TotalPages {get; set;}
    public IEnumerable<dataType> Data {get; set;}
}