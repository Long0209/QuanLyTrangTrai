using SmartFarm.API.Extensions.PagedList.Models;

namespace SmartFarm.API.Extensions.PagedList;

public static class PagedListExtension {
    public static PagedListViewModel<T> ToPagedList<T>(this IQueryable<T> source, int pageIndex, int pageSize) {
        var result = new PagedListViewModel<T>(source, pageIndex, pageSize);

        return result;
    }

    public static PagedListViewModel<T> ToPagedList<T>(this IQueryable<T> source, PageInputModel pageInputModel) {
        var result = new PagedListViewModel<T>(source, pageInputModel.PageIndex, pageInputModel.PageSize);

        return result;
    }
}
