

export default function Button() {
    return (
        <label className="relative inline-flex items-center cursor-pointer text-sm mb-5">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 dark:bg-red-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-blue-600 peer-checked:bg-red-600">
                
            </div>
            <span className="ms-3 text-sm font-medium text-black dark:text-red-300 select-none">
                driver_ones
            </span>
        </label>
    )
}
