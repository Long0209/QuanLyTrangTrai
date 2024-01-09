
import { Outlet } from "react-router-dom";
// 
import NavLayout from "./NavLayout.tsx";

function MasterDefaultNav() {
    return (
        <>
            <div className="NavBar-default sticky top-0 left-0 right-0 h-full z-50">
                <NavLayout/>
            </div>
            <div className="Content-default relative z-40">
                <Outlet/>
            </div>
        </>
    )
}

export default MasterDefaultNav;