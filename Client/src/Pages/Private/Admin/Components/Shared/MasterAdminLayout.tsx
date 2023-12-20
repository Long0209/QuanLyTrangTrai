// Nhập thư viện
import { Link, Outlet } from "react-router-dom";


// import use Icons-react
import { TiTree } from "react-icons/ti";
import { CiSettings } from "react-icons/ci";
import { FaOutdent } from "react-icons/fa";
import { GoContainer } from "react-icons/go";
import { FcComboChart } from "react-icons/fc";

// 
import icons_1 from "@/assets/Images/icons_12.jpg";
import icons_2 from "@/assets/react.svg";

// 
import { GetTimes, GetDates } from "@/Components/Time/ShowDateTime";

// links-List_Items
// const LinkListAdmin = [
//     {name:"Trang_1", href:"#", role:"menuitem"},
//     {name:"Trang_2", href:"#", role:"menuitem"},
//     {name:"Trang_2", href:"#", role:"menuitem"},
//     {name:"Trang_2", href:"#", role:"menuitem"},
// ]

// Dashboard-Items
const DashboardItems = [
    {name:"Trang Chủ", href:"/admin", icons:GoContainer  },
    {name:"Nhà Trồng", href:"home_1", icons:TiTree },
    {name:"Thống Kê Chi Tiết", href:"home_2", icons:FcComboChart },
    {name:"Cài Đặt", href:"Setting", icons:CiSettings },
    {name:"Thoát", href:"Out", icons:FaOutdent}
]

// hien thi thanh phan thoi gian
function Date_Time() {
    
    return(
        <>
            <div className="flex justify-around select-none text-sm">
                <span className="text-red-500">
                    <GetDates/>
                </span>
                <p className="mx-1"></p>
                <span className="text-purple-500">
                    <GetTimes/>
                </span>
            </div>
        </>

    )
}

// thanh tiêu đề, thanh phía trên
function NavBar_Top() {

    return (
        // default
        <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            {/* container-top */}
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                {/* conatiner-2-top */}
                <div className="flex items-center justify-between">
                    {/* user -icons  */}
                    <div className="flex items-center justify-start rtl:justify-end">  
                        {/* button - ai */}
                        <button data-drawer-target="logo-sidebar" 
                            data-drawer-toggle="logo-sidebar" 
                            aria-controls="logo-sidebar" 
                            type="button" 
                            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        >
                            <span className="sr-only">
                                Open sidebar
                            </span>
                            <svg className="w-6 h-6" 
                                aria-hidden="true" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path clipRule="evenodd" 
                                    fillRule="evenodd" 
                                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                                </path>
                            </svg>
                        </button>

                        {/* links items change icons and link become your own  */}
                        <a href="#" 
                            className="flex ms-2 md:me-24 "
                        >
                            {/* images logos */}
                            <img src={icons_2} 
                                className="h-8 me-3" 
                                alt="FlowBite Logo"
                            />
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                Flowbite
                            </span>
                        </a>
                    </div>
                    
                    {/* default-user icons */}
                    <div className="flex items-center icons-user">

                        {/* show date time */}
                        <div className="date-time">
                            <Date_Time/>
                        </div>
                        {/* icons user */}
                        <div className="flex items-center ms-3">
                            <div>
                                <div  className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" 
                                    // aria-expanded="false" 
                                    // data-dropdown-toggle="dropdown-user"
                                >
                                    <span className="sr-only"> Open Menu User </span>
                                    <img className="w-8 h-8 rounded-full" src={icons_1} alt="user photo"/>
                                </div>
                            </div>

                            {/* items-user-drop */}
                            {/*
                                <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600" 
                                    id="dropdown-user"
                                >
                                    {/*  items title dashboard *
                                    <ul className="py-1" role="none">
                                        {
                                            LinkListAdmin.map( (item, index) => {
                                                return (
                                                    <li key={index}>
                                                        <Link to={item.href} 
                                                            role={item.role} 
                                                            className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                                                        >
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div> 
                            */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// tùy chọn thanh bên ( bên trái)
function Sibar_Layout() {

    return (
        // sibar Layout 
        <aside id="logo-sidebar" 
            className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" 
            aria-label="Sidebar"
        >
            {/* s */}
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {  
                        DashboardItems.map ((item, index) => {
                            const Icon = item.icons;

                            return (
                                <li key={index}>
                                    <Link to={item.href}
                                        className='flex first-letter: items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
                                    >  
                                        <Icon />
                                        <span className='ps-4'>
                                            {item.name}
                                        </span>
                                    </Link>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        </aside>

    );
}

// Nội Dụng Hiện Thị Trung Tâm thông tin
function Content_Main () {

    return (
        // content page Layout 
        <div className="mt-14 p-4 sm:ml-64">
            <div className="text-sm">
                <Outlet/>

                {/* 
                    <Button_1/>
                    <FormSignAccount/>
                    <Chart_1/>
                    <GetEspData/> 
                */}
            </div>

        {/*                 
            <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
                <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center h-48 mb-4 rounded bg-gray-50 dark:bg-gray-800">
                    <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                        <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                        </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                    <div className="flex items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
                        <p className="text-2xl text-gray-400 dark:text-gray-500">
                            <svg className="w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
                            </svg>
                        </p>
                    </div>
                </div>
            </div> 
        */}
        </div>
    );
}

// Master Layout Administration
export default function MasterAdminLayout() {

    return (
        <>
            <NavBar_Top/>
            <Sibar_Layout/>
            <div className="container-none">
                <Content_Main/>
            </div>
        </>
    )
}
