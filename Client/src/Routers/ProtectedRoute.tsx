import  {useState} from 'react'
import {Routes, Route, useNavigate } from "react-router-dom";

// Thành Phần Tĩnh 
import { MasterDefaultNavbar, PageError, ChartTest, Login } from "@/Components";

// Thành Phần Động
import { Home, News, Support } from "@/Pages/Public";

// import Layout Admin interface
// câu lệnh bỏ qua lỗi không tìm thấy thành dù thành phần vẫn được nập vào và hiện thị 
// /\\/\/\//\/\/\\/\/\//\\/\/\//\/\/\\/\/\/
import { 
    MasterAdminLayout, 
    // @ts-ignore 
} from "@private/Admin/Components";

// /\\/\/\//\/\/\\/\/\//\\/\/\//\/\/\\/\/\/
import {  
    Main_Content_Home,  
    Main_Content_Farm, 
    Main_Content_Admin,
    Home_2, 
    ManageAdmin
    // @ts-ignore
} from "@private/Admin/Pages"; 


// In this example, Home, News, Support, and Informations are assumed to be different components in your application. 
// Adjust the component names based on the actual components you have in your code
const _private_Router =[
    { path: '/login', component: Home, },
    { path: '/admin', component: Home, },
    { path: '/user', component: Home, }
]

// In this example, Home, News, Support, and Informations are assumed to be different components in your application. 
// Adjust the component names based on the actual components you have in your code
const _public_Router =[
    { path: '/', component: Home, },
    { path: '/news', component: Home, },
    { path: '/support', component: Home, },
    { path: '/infomations', component: Home, }
]

// It looks like you've started to define a ProtectedRoute component
// A common use case for a ProtectedRoute component is to conditionally render a component based on whether the user is authenticated or not. Typically, you might want to redirect unauthenticated users to a login page or show a login form
function ProtectedRoute({ component: Component, ...rest }: any) {
    let navigate = useNavigate();
    const isAuthenticated = sessionStorage.getItem('session');
    
    // render the component
    return (
        <Route
            {...rest}
            render={(props: any) =>
                isAuthenticated ? (
                    <Component {...props} />
                ) : (
                    navigate("/login" )
                )
            }
        />
    );
}

export default ProtectedRoute