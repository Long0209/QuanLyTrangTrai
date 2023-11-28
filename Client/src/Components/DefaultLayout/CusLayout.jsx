
import React from 'react';
// Router 
import { Link, NavLink } from 'react-router-dom';
// icons
import {GoPersonAdd } from 'react-icons/go';
// import pages in components
import UserDropDowm from './UserDropDowm';



function CusLayout() {
    return (
        <>
            <nav className="bg-slate-700 border-gray-200 dark:bg-gray-900 ">
                <div className="max-w-screen flex flex-wrap items-center lg:justify-between mx-auto p-4">
                    <div className="left-items flex flex-wrap items-center">
                        {/* icons logo link */}
                        <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="./Icons/farm.png" className=" w-12" alt="Flowbite Logo" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
                            >
                                Flowbite
                            </span>
                        </NavLink>

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
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border bg-slate-700 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-slate-700 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                <li>
                                    <NavLink to="/" 
                                        className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-white md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent" 
                                        aria-current="page"
                                    >
                                        Trang Chủ
                                    </NavLink>
                                </li>

                                {/* link dieu huong 1 */}
                                <li>
                                <NavLink to="news" 
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Tin Tức
                                </NavLink>
                                </li>

                                {/* link dieu huong 2 */}
                                <li>
                                <NavLink to="supports" 
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Hỗi Trợ
                                </NavLink>
                                </li>

                                {/* link dieu huong 3 */}
                                <li>
                                <NavLink to="infomations" 
                                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                                >
                                    Giới Thiệu
                                </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* user Drop-items */}
                    <div className="user dropdows-user-items ">
                        <UserDropDowm/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default CusLayout