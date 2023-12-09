// Nạp Các Framework Routes và React
import {Routes, Route } from "react-router-dom";

// Nạp Các Thành Phần con 
// Thành Phần Tĩnh
import {Navbar, NoPages, ChartTest } from "@/Components";

// Thành Phần Động
import { Home, News, Support } from "@/Pages/Public";

// import Layout Admin interface
// import { Layout } from "private/"
// câu lệnh bỏ qua lỗi không tìm thấy thành dù thành phần vẫn được nập vào và hiện thị 
// @ts-ignore 
import Admin from "@private/Admin.tsx";

// @ts-ignore
import { AdminLayout } from "@private/Admin/Components";

// Admin configuration
// import css stype from
import "@/assets/Style/Style.css"; 

// Thực Hiện Trả Về Kết Quả
function Router() {

    return (
        <div className="wrap-content">
            <Routes>
                <Route path="/" element={<Navbar/>} >
                    <Route index element={<Home/>} />
                    <Route path="news" element={<News/>} />
                    <Route path="support" element={<Support/>} />
                    <Route path="infomations" element={<ChartTest/>} />
    
                    {/* Không tìm Thấy Trang Theo URL( / ) */}
                    <Route path="*" element={<NoPages/>} />
                </Route>

                {/* Admin */}
                {/* Router Admin */}
                <Route path='/Admin' element={ <AdminLayout/> }>
                    {/* <Route index element={ <AdminHome/> }/>
                    <Route path='Chart_1' element={ <Chart_1/> }/>
                    <Route path='Home' element={ <AdminHome/> }/>
                    <Route path='Home2' element={ <Home2/> }/>
                    <Route path='GetEspData' element={ <GetEspData/> }/> */}

                    {/* Page error */}
                    <Route path='*' element={<NoPages/>}/>
                </Route>
    
                {/* Không tìm Thấy Trang Theo URL( Group ) */}
                <Route path="*" element={<NoPages/>} />
            </Routes>
        </div>
    )
}

export default Router;