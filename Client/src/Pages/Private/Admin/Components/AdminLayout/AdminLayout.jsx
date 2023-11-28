
import React from 'react';
import { Link } from 'react-router-dom';


function AdminLayout() {
    return (
        <>
            <div className="p-2 bg-white w-auto md:w-60 flex flex-col md:flex border border-e-2 min-h-screen " id="sideNav">
                {/*  */}
                <ul>
                    <li className=" text-gray-500 cursor-pointer py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i className="fas fa-home mr-2"></i>
                        <span> Trang Chủ </span>
                    </li>
                    {/*  */}
                    <li className=" text-gray-500 cursor-pointer py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i className="fas fa-home mr-2"></i>
                        <span> Quản Lý Trang Trại </span>
                    </li>
                    {/*  */}
                    <li className=" text-gray-500 cursor-pointer py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i className="fas fa-home mr-2"></i>
                        <span> Quản Lý Tại Khoản </span>
                    </li>
                    {/*  */}
                    <li className=" text-gray-500 cursor-pointer py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i className="fas fa-home mr-2"></i>
                        <span> Thống Kê Quản Lý </span>
                    </li>
                    {/*  */}
                    <li className=" text-gray-500 cursor-pointer py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i className="fas fa-home mr-2"></i>
                        <span> Hỗi Trợ </span>
                    </li>
                </ul>
                {/* <!-- Ítem de Cerrar Sesión --> */}
                <hr />
                <ul classNameName='absolute bottom-0'>
                    {/* Sing Admin */}
                    <li classNameName='w-full'>
                        <Link className="block text-gray-500 py-2.5 ps-4 my-2 rounded transition duration-200 cursor-pointer" 
                            target="_blank">
                            <i className="fas fa-sign-out-alt mr-2"></i>
                            Đăng Xuất  
                        </Link>
                    </li>

                    {/* <!-- Copyright al final de la navegación lateral --> */}
                    <li>
                        <p className="mb-1 px-5 py-3 text-sm text-slate-500 bg-clip-text bg-gradient-to-r from-fuchsia-500 to-red-500">
                            <span classNameName='block text-transparent select-none'> Hiển Thị Thời Gian</span>
                        </p>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default AdminLayout;