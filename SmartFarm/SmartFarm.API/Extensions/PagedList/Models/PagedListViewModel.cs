namespace SmartFarm.API.Extensions.PagedList.Models;

public class PagedListViewModel<dataType> {
    public PagedListViewModel() {

    }

    public PagedListViewModel (IQueryable<dataType> dataSource, int pageIndex, int pageSize){
        this.TotalItems = dataSource.Count();
        this.TotalPages = (int)Math.Ceiling((double)TotalItems / pageSize);
        this.PageSize = pageSize;
        this.PageIndex = pageIndex;
        this.PageDetails = new PagedListData() {
            TotalItems = this.TotalItems,
            TotalPages = this.TotalPages,
            PageSize = this.PageSize,
            PageIndex = this.PageIndex
        };
        this.PageDetails.TotalItems = this.TotalItems;
        this.Data = dataSource
            .Skip((pageIndex - 1) * pageSize)
            .Take(pageSize)
            .ToList();
    }


    public PagedListData  PageDetails {get; set;}
    private int TotalItems {get; set;}
    private int PageIndex {get; set;}
    private int PageSize {get; set;}
    private int TotalPages {get; set;}
    public IEnumerable<dataType> Data {get; set;}

    public class PagedListData {
        public int TotalItems {get; set;}
        public int PageIndex {get; set;}
        public int PageSize {get; set;}
        public int TotalPages {get; set;}
    }
}