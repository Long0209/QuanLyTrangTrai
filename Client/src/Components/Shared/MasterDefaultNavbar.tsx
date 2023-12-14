
import { Outlet } from "react-router-dom";
// 
import NavItems from "./NavItems.tsx";

function MasterDefaultNavbar() {
    return (
        <>
            <div className="NavBar-default sticky top-0 left-0 right-0 h-full z-50">
                <NavItems/>
            </div>
            <div className="Content-default z-40">
                <Outlet/>
            </div>
        </>
    )
}

export default MasterDefaultNavbar;