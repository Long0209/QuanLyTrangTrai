// 
import { Home } from "@/Pages/Public";


// array router public methods
const public_routers = [
    {  path: "/", element : Home, index: true},
    {  path: "/news", element : Home, index: false},
    {  path: "/support", element : Home, index: false},
    {  path: "/infomations", element : Home, index: false},

]

// array router public methods
const private_routers = [
    {  path: "/Login", element : Home, index: true},
    {  path: "/Admin", element : Home, index: false},
    {  path: "/User", element : Home, index: false},

]


// Public-Router
function PublicRouter() {
    return (
        <div>
            PrivateRouter

        </div>
    )
}

// Private-Router
function PrivateRouter() {
    return (
        <div>
            PrivateRouter

        </div>
    )
}

export { PrivateRouter, PublicRouter}