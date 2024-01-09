import Table from '@/Components/Table/Table';
import { table_data, table_data_title } from "@/Databases/Data_Test";

const Button_Custorm = () =>{

    return (
        <>
            <button 
                type="button" 
                className="text-xs font-medium rounded-lg px-3 py-2 text-center me-2 mb-2 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800">
                    Add
            </button>
            <button 
                type="button" 
                className="text-xs font-medium rounded-lg px-3 py-2 text-center me-2 mb-2 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                    Edit
            </button>
            <button 
                type="button" 
                className="text-xs font-medium rounded-lg px-3 py-2 text-center me-2 mb-2 text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800">
                    Delete
            </button>
        </>
    )
};

const Sreach_Custorm = () =>{

    return (
        <>
            <div className="relative shadow-sm input-search">
                <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" 
                    id="table-search" 
                    className="block pt-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder="Search htmlFor items" 
                />
            </div>
        </>
    )
};

function Main_Manage_Admin() {

    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-slate-100 px-0 py-1">
            <div className="mt-1 flex justify-between px-8">
                <div className="search-custorm">
                    <Sreach_Custorm/>
                </div>
                {/* button event  */}
                <div className="actions-evented ">
                    <Button_Custorm/>
                </div>
            </div>
            {/* bang hien thi thong tin */}
            <div className="table-show re">
                <Table data={table_data} data_title={table_data_title}/>
            </div>  
        </div>


    );
};

export {Main_Manage_Admin};