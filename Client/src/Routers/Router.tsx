import {Routes, Route } from "react-router-dom";

import { MasterDefaultNavbar, PageError, ChartTest, Login } from "@/Components";
import { Home, News, Support } from "@/Pages/Public";

// Components-Admin
import { 
    MasterAdminLayout, 
    // @ts-ignore 
} from "@private/Admin/Components";

// Pages-Admin
import {  
    Main_Content_Home,  
    Main_Content_Farm, 
    Main_Content_Admin,
    Main_Manage_Admin, 
    Main_Detail_Admin
    // @ts-ignore
} from "@private/Admin/Pages"; 

// Components-User
import {  
    SharedLayout_User
    // @ts-ignore
} from "@private/User/Components"; 

// Pages-User
import {  
    HomeUser
    // @ts-ignore
} from "@private/User/Pages"; 

// File-Style
import "@/assets/Style/Style.css"; 

const PublicRouter = () =>{

    return(
        <Routes>
            {/* Router Default */}
            <Route path="/" element={ <MasterDefaultNavbar/> }>
                <Route index path="/" element={ <Home/>} />
                <Route path="/news" element={ <News/> } />
                <Route path="/support" element={ <Support/> } />
                <Route path="/infomations" element={ <ChartTest/> } />

                {/* user-login */}
                <Route path="/Nguoi-Dung" element={ <SharedLayout_User/> }>
                    <Route index element={ <HomeUser/> }/>
                </Route>
                

            </Route>

            <Route path="/login" element={ <Login/> } />
            <Route path="/*" element={<PageError/>} />
        </Routes>
    )
}

// 
const PrivateRouter = () =>{

    return(
        <Routes>
            {/* Private Router */}
            <Route path='/Admin' element={ <MasterAdminLayout/> }>
                <Route index element={ <Main_Content_Home/> }/>
                <Route path="nha-trong" element={ <Main_Content_Farm/> }/>
                <Route path="manage" element={ <Main_Manage_Admin/> }/>
                <Route path="detail" element={ <Main_Detail_Admin/> }/>
                <Route path="setting" element={ <Main_Content_Admin/> }/>
                {/* <Route index path="home_2" element={ <Home_2/> }/> */}
                {/* <Route index path="home" element={ <Admin/> }/> */}
                {/* 
                    <Route path='Chart_1' element={ <Chart_1/> }/>
                    <Route path='Home' element={ <AdminHome/> }/>
                    <Route path='Home2' element={ <Home2/> }/>
                    <Route path='GetEspData' element={ <GetEspData/> }/> 
                */}

            </Route>
             {/* Page error */}
            <Route path='/Admin/*' element={<PageError/>}/>
        </Routes>
    )
}

// Thực Hiện Trả Về Kết Quả
function Router() {
    const session = sessionStorage.getItem('session');

    return (
        <div className="wrap-content">
            {
                !session ? <PublicRouter/> : <PrivateRouter/>
            }
        </div>
    )
}

export default Router;