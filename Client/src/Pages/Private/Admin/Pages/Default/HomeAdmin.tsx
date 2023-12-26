// improt fuctions get date time 
// import { GetTimes, GetDates } from "@/Components/Time/ShowDateTime";
import { CiTempHigh } from "react-icons/ci";
import { WiWindBeaufort0 } from "react-icons/wi"; // icons winds
import { WiNightAltRainWind } from "react-icons/wi"; // icons lavi
import { FcLandscape } from "react-icons/fc"; //icon night


// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
// -.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.-.
import ContainerFrame from "../../../../../Components/Frames/ContainerFrame";
import ChartLineDouble from "@/Components/Chart/ChartLineDouble";
import React from "react";
import { get_esp_owned_devices } from "@/Service/API/ESP";

// tao fun son loading dong ho
function HomeAdmin() {

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

// 
function Home_1() {
    get_esp_owned_devices(1, 200)
        .then( (responese) => {
            console.log( 'responese>>', responese.data);
        })
        .catch ( (err) => {
            console.log("err>>", err)
        })

    return(
    <>
        <span>
            Home_1
        </span>
        <p>
            <strong>
                {
                    sessionStorage.getItem('session')
                }
            </strong>
        </p>
    </>
    )
}

// 
function Home_2(){
    return (
        <>
            <span>Home_2</span>
        </>
    )
}




export {HomeAdmin, Home_1, Home_2}

