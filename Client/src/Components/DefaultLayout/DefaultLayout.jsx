
import React from 'react';

import { Link, Outlet } from 'react-router-dom';

import CusLayout from './CusLayout';

function DefaultLayout() {
    return (
        <>
            <div className="header-default  left-0 right-0 h-auto w-full z-50 mb-0.5">
                <CusLayout/>
            </div>
            <div className="main-content" tabIndex={0}>
                <Outlet/>
            </div>
        </>
    )
}

export default DefaultLayout