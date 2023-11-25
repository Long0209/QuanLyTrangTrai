
import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';


function AdminLayout() {
    return (
        <Fragment>
            <div class="p-2 bg-white w-auto md:w-60 flex flex-col md:flex border border-e-2 min-h-screen " id="sideNav">
                {/*  */}
                <ul>
                    <li class=" text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i class="fas fa-home mr-2"></i>
                        <span> Trang Chủ </span>
                    </li>
                    {/*  */}
                    <li class=" text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i class="fas fa-home mr-2"></i>
                        <span> Quản Lý Trang Trại </span>
                    </li>
                    {/*  */}
                    <li class=" text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i class="fas fa-home mr-2"></i>
                        <span> Quản Lý Tại Khoản </span>
                    </li>
                    {/*  */}
                    <li class=" text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i class="fas fa-home mr-2"></i>
                        <span> Thống Kê Quản Lý </span>
                    </li>
                    {/*  */}
                    <li class=" text-gray-500 py-2.5 px-4 my-4 rounded transition duration-200 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-500 hover:text-white" 
                        target="_blank">
                        <i class="fas fa-home mr-2"></i>
                        <span> Hỗi Trợ </span>
                    </li>
                </ul>
                {/* <!-- Ítem de Cerrar Sesión --> */}
                <hr />
                <div className='absolute bottom-0'>
                    {/* Sing Admin */}
                    <div className='w-full'>
                        <Link class="block text-gray-500 py-2.5 ps-4 my-2 rounded transition duration-200 cursor-pointer" 
                            target="_blank">
                            <i class="fas fa-sign-out-alt mr-2"></i>
                            Đăng Xuất  
                        </Link>
                    </div>

                    {/* <!-- Copyright al final de la navegación lateral --> */}
                    <div>
                        <p class="mb-1 px-5 py-3 text-sm text-slate-500 bg-clip-text bg-gradient-to-r from-fuchsia-500 to-red-500">
                            <span className='block text-transparent select-none'> Hiển Thị Thời Gian</span>
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default AdminLayout;