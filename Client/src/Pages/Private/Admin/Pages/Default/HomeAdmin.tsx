// improt fuctions get date time 
// import { GetTimes, GetDates } from "@/Components/Time/ShowDateTime";
import { CiTempHigh } from "react-icons/ci";
import { WiWindBeaufort0 } from "react-icons/wi"; // icons winds
import { WiNightAltRainWind } from "react-icons/wi"; // icons lavi
import { FcLandscape } from "react-icons/fc"; //icon night


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
import ContainerFrame from "@/Components/Frames/ContainerFrame";
import ChartLineDouble from "@/Components/Chart/ChartLineDouble";
import React from "react";
import { get_esp_owned_devices } from "@/Service/API/ESP";

// Trang Chủ 
// Chứ Manage_admín chứa thông tin sơ bộ về services của server như số người, số tài khoản dùng, nhà trồng đã đăng ký 
// Các chức năng cơ bản như thay đỏi thông tin nhà trồng, tài khoản, người dùng, thiết bị v.v..
// trang hiện thi sơ bộ 
// các thành phần nhỏ khác
// hiển thị biêu đồ
// hiển thị thông tin dưới dạng bảng
// nhà trồng 
// tài khoản 
// 
function Main_Content_Home() {

    return (
        <>
            <span> home admin </span>
            <div className="border border-stone-100 shadow-neutral-200 shadow-lg w-full flex justify-around py-4 px-auto gap-x-1 ">
                {/* khung 1 */}
                <div className="frame-items ">
                    <ContainerFrame value={"32"} icons={<CiTempHigh/>} title={"khung 1"}/>
                </div>

                {/* khung 2 */}
                <div className="frame-items">
                    <ContainerFrame  value={"24"} icons={<WiNightAltRainWind/>} title={"khung 2"}/>
                </div>

                {/* khung 3 */}
                <div className="frame-items">
                    <ContainerFrame  value={"23"} icons={<WiWindBeaufort0/>} title={"khung 3"}/>
                </div>

                {/* khung 4 */}
                <div className="frame-items">
                    <ContainerFrame  value={"12"} icons={<FcLandscape/>} title={"khung 4"}/>
                </div>
            </div>

            {/* chart */}
            <div className="">
                <ChartLineDouble />
            </div>
        </>
    )
}

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
// chua co
function Home_2(){
    return (
        <>
            <span>Home_2</span>
        </>
    )
}

// /\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\
export {Main_Content_Home, Home_2}

