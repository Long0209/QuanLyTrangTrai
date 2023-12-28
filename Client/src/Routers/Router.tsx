// Nạp Các Framework Routes và React
import React from "react";
import {Routes, Route, useNavigate } from "react-router-dom";

// Nạp Các Thành Phần con 
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

// /\\/\/\//\/\/\\/\/\//\\/\/\//\/\/\\/\/\/
// import css stype from
import "@/assets/Style/Style.css"; 

// /\\/\/\//\/\/\\/\/\//\\/\/\//\/\/\\/\/\/
const PublicRouter = () =>{

    return(
        <Routes>
            {/* Router Default */}
            <Route path="/" element={ <MasterDefaultNavbar/> }>
                <Route index path="/" element={ <Home/>} />
                <Route path="/news" element={ <News/> } />
                <Route path="/support" element={ <Support/> } />
                <Route path="/infomations" element={ <ChartTest/> } />
            </Route>
            {/* login router */}
            <Route path="/login" element={ <Login/> } />
            {/* Không tìm Thấy Trang Theo URL( / ) */}
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
                <Route path="manage" element={ <Home_2/> }/>
                <Route path="detail" element={ <ManageAdmin/> }/>
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
    let navigate = useNavigate();
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