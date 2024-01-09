import React from "react";
import { Link } from "react-router-dom";

import { FcHome } from "react-icons/fc"; //icons-home
import { MdOutlineManageAccounts } from "react-icons/md"; //icons-account
import { SiGooglecontaineroptimizedos } from "react-icons/si"; //container
// import { VscSettings } from "react-icons/vsc"; //icons-setting

const item_Dashboard_user =[
    {name: "Trang Chủ", path: "/Nguoi-Dung", icon: FcHome},
    {name: "Nhà Trồng", path: "Nha-Trong", icon: SiGooglecontaineroptimizedos},
    {name: "Tài Khoản", path: "Tai-Khoan", icon: MdOutlineManageAccounts},
]


function Dashboard_user() {

    return (
        <React.Fragment>    
            <button data-drawer-target="sidebar-multi-level-sidebar" data-drawer-toggle="sidebar-multi-level-sidebar" aria-controls="sidebar-multi-level-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">Open sidebar</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside id="sidebar-multi-level-sidebar" className=" z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
                <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2 font-medium">
                        {
                            item_Dashboard_user.map( (item, index) => {
                                const Icon = item.icon;

                                return(
                                    <li key={index}>
                                        <Link 
                                            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                            to={item.path}
                                        >
                                            <span className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" 
                                                aria-hidden="true" 
                                            >
                                                <Icon/>
                                            </span>
                                            <span className="ms-3">{item.name}</span>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </aside>
        </React.Fragment>
    );
};

export default Dashboard_user;