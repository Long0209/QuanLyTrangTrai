
import { Link, NavLink } from "react-router-dom";
import iconRe from '../../assets/react.svg';

import { TiThMenu } from "react-icons/ti";


const itemLinks = [
    {name: " Trang Chủ ", href:"/"},
    {name: " Tin Tức ", href:"news"},
    {name: " Giới Thiệu ", href:"infomations"},
    {name: " Hỗi Trợ ", href:"support"},
]

const ItemUser = [
    {name: "Đăng Xuất", href:"#"},
    {name: "Đăng Nhập", href:"#"},
    {name: "Thông Tin Chung", href:"#"},
]


function UserDropItem() {
    return (
        <>
            <button id="dropdownDefaultButton" 
                data-dropdown-toggle="dropdown" 
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center" 
                type="button"
            >
                    Dropdown button 
                <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                </svg>
            </button>

            {/* <!-- Dropdown menu --> */}
            <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" >
                    {
                        ItemUser.map(
                            (item, index) =>
                                <li className="item-user" key={index}>
                                    <Link to={item.href}
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default function NavItems() {
    return (
        <nav className="bg-slate-700 border-gray-200 dark:bg-gray-900 ">
                <div className="max-w-screen flex flex-wrap items-center lg:justify-between mx-auto p-4">
                    
                    <div className="left-items flex flex-wrap items-center">
                        {/* icons logo link */}
                        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src={iconRe} className=" w-12" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                            >
                                Flowbite
                            </span>
                        </Link>

                        {/* repont buttom */}
                        <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="navbar-dropdown" 
                            aria-expanded="false">
                            <span className="sr-only">
                                Open main menu
                            </span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>

                        {/* class hiden items link */}
                        <div className="hidden w-full md:block md:w-auto lg:ps-12" id="navbar-dropdown">
                            <ul className="nav-menu flex flex-col font-medium p-4 md:p-0 mt-4 border bg-slate-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                {
                                    itemLinks.map( (link, index) => 
                                        <li key={index}> 
                                            <NavLink to={link.href}
                                                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                            >
                                                {link.name}
                                            </NavLink>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                    </div>
                    {/* user Drop-items */}
                    <div className="user dropdows-user-items ">
                        <UserDropItem/>
                    </div>
                </div>
                
            </nav>
    )
}




