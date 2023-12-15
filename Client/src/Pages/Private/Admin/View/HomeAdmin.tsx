
// 
// import { useState, useEffect } from 'react';

// improt fuctions get date time 
import { GetTimes, GetDates } from "@/Components/Time/ShowDateTime";
// tao fun son loading dong ho
function HomeAdmin() {
    return (
        <>
            <span> get times:  <GetTimes/> </span>
            <span> get Dates: <br /> <GetDates/> </span>
        </>
    )
}


function Home_1() {
    return (
        <>
            Admin Home -1 
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