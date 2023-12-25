
// 
// import { useState, useEffect } from 'react';

// improt fuctions get date time 
// import { GetTimes, GetDates } from "@/Components/Time/ShowDateTime";
import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

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
    const fetchData = async () => {

        // Your API endpoint
        const apiUrl = 'http://localhost:5048/api/v1/identity/user/user-info';

        console.log("render: ")

        // Axios request configuration
        const config = {
            method: 'get', 
            url: apiUrl,
            withCredentials: true, // Enable sending and receiving cookies
            headers: {
                'Content-Type': 'application/json', // Adjust the content type based on your API requirements
                
            },
            
        };
        try {
            
            //const response = await axios.get("http://localhost:5048/api/v1/customer/esp-device/esp-data?deviceId=1");
            const response = await axios(config);
            //console.log(response.data);
            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        } catch (err) {
            // Handle error
            console.log(err);
        }
    };
    
    fetchData();

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

