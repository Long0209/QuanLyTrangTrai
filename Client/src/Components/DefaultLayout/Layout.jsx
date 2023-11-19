
import React from 'react';

import { Link, Outlet } from 'react-router-dom';

function Layout() {
    return (
        <>
            <div className="container">
                Layout
            </div>
            <Outlet/>
        </>
    )
}

export default Layout