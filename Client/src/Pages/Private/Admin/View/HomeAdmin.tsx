
// 
// import { useState, useEffect } from 'react';

// improt fuctions get date time 
// import { GetTimes, GetDates } from "@/Components/Time/ShowDateTime";

import ContainerFrame from "../Components/Frames/ContainerFrame";
import ChartLineDouble from "@/Components/Chart/ChartLineDouble";

// api
// import { AuthLogin} from "@/Service/APi";
// import { METHODS } from "http";


// tao fun son loading dong ho
function HomeAdmin() {

    return (
        <>
            <span> home admin </span>
            <div className="border border-stone-100 shadow-neutral-200 shadow-lg w-full flex justify-around py-4 px-auto gap-x-1 ">
                {/* khung 1 */}
                <div className="frame-items ">
                    <ContainerFrame/>
                </div>

                {/* khung 2 */}
                <div className="frame-items">
                    <ContainerFrame/>
                </div>

                {/* khung 3 */}
                <div className="frame-items">
                    <ContainerFrame/>
                </div>

                {/* khung 4 */}
                <div className="frame-items">
                    <ContainerFrame/>
                </div>
            </div>

            {/* chart */}
            <div className="">
                <ChartLineDouble/>
            </div>
        </>
    )
}

// 
function Home_1() {

    return (
        <>
            Admin Home -1 
            {/* <AuthLogin/> */}

        </>
    );
}


function Home_2() {
    return (
        <>
            Admin Home - 2
        </>
    );
}

export {HomeAdmin, Home_1, Home_2}

