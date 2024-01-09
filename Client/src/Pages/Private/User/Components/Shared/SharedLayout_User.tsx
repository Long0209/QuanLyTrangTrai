import React from 'react';
import { Outlet } from 'react-router-dom';

import Dashboard_user from './Dashboard_user';


function SharedLayout_User() {

    return (
        <React.Fragment>
            <div className="Dashboard">
                <div className='Dashboard_user fixed left-0'>
                    <Dashboard_user/> 
                </div>
                <div className="Dashboard_user_content mt-1 sm:ml-64 ">
                    <Outlet/>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SharedLayout_User;