// Nạp Các Framework Routes và React
import {Routes, Route } from "react-router-dom";

// Nạp Các Thành Phần con 
// Thành Phần Tĩnh 
import { MasterDefaultNavbar, PageError, ChartTest, Login } from "@/Components";

// Thành Phần Động
import { Home, News, Support } from "@/Pages/Public";

// import Layout Admin interface
// câu lệnh bỏ qua lỗi không tìm thấy thành dù thành phần vẫn được nập vào và hiện thị 
// @ts-ignore
import { MasterAdminLayout, } from "@private/Admin/Components";
// @ts-ignore
import { HomeAdmin, Home_2, Home_1, ManageAdmin } from "@private/Admin/Pages";

// Admin configuration

// import css stype from
import "@/assets/Style/Style.css"; 

// Thực Hiện Trả Về Kết Quả
function Router() {

    return (
        <div className="wrap-content">
            <Routes>    
                {/* Router Default */}
                <Route path="/" element={ <MasterDefaultNavbar/> }>
                    <Route index element={ <Home/>} />
                    <Route path="news" element={ <News/> } />
                    <Route path="support" element={ <Support/> } />
                    <Route path="infomations" element={ <ChartTest/> } />
    
                    {/* Không tìm Thấy Trang Theo URL( / ) */}
                    <Route path="*" element={<PageError/>} />
                </Route>

                {/* Router Login */}
                <Route path="/Login" element={ <Login/> } />

                {/* Router Admin */}
                <Route path='/Admin' element={ <MasterAdminLayout/> }>
                    <Route index element={ <HomeAdmin/> }/>
                    <Route path="home_1" element={ <Home_1/> }/>
                    <Route path="home_2" element={ <Home_2/> }/>
                    <Route path="manage" element={ <ManageAdmin/> }/>
                    {/* <Route index path="home_2" element={ <Home_2/> }/> */}
                    {/* <Route index path="home" element={ <Admin/> }/> */}
                    {/* 
                        <Route path='Chart_1' element={ <Chart_1/> }/>
                        <Route path='Home' element={ <AdminHome/> }/>
                        <Route path='Home2' element={ <Home2/> }/>
                        <Route path='GetEspData' element={ <GetEspData/> }/> 
                    */}

                    {/* Page error */}
                    <Route path='*' element={<PageError/>}/>
                </Route>
    
                {/* Không tìm Thấy Trang Theo URL( Group ) */}
                <Route path="*" element={ <PageError/> } />
            </Routes>
        </div>
    )
}

export default Router;