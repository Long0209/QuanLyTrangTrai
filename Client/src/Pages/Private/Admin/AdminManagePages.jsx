
import React from 'react';
import { Outlet } from 'react-router-dom';
// 
import {AdminLayout} from './Components';

function AdminManagePages() {
    return (
        <>
            <div className="App-manage-default flex flex-1 flex-wrap" >
                <div className="dashboard relative top-0 left-0 bottom-0">
                    <AdminLayout/>
                </div>
                <div className="admin-content mx-1.5 mt-1">
                    <Outlet/>
                </div>
            </div>
        </>
    )
}

export default AdminManagePages