using SmartFarm.API.Models;

namespace SmartFarm.API.Extensions.PagedList;

public static class PagedListExtension {
    public static PagedListViewModel<T> ToPagedList<T>(this IQueryable<T> source, int pageIndex, int pageSize) {
        var result = new PagedListViewModel<T>(source, pageIndex, pageSize);

        return result;
    }
}
