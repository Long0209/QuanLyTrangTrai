
// improt react
import { useState, useEffect } from "react";

// 

// get-times in system and format
function GetTimes() {
    const [time, setTimes] = useState(new Date());

    const loopTimes = 1000; // gia tri cong lap thoi gian don vi ( ms )

    // vong lap thoi gian
    useEffect( () => {
        const intervalId = setInterval( () => { 
            setTimes( new Date() )
            
            // hien thi kiem tra thong tin thoi gian dang chay la
            // console.log(time);
        }, loopTimes) 

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);

    }, [time])

    // Empty dependency array to run the effect only once on mount
    const formatTime = time.toLocaleTimeString();

    // run index functions
    return (
        <div className="get-Time inline">
            <span className="showTime">{formatTime} </span><br />
        </div>
    );
}

// get-date in system and format
function GetDates() {
    const [date, setDate] = useState(new Date());
    const today = new Date();

    const loopTimes = 3600000; // gia tri cong lap thoi gian don vi ( ms )
    
    // get Month
    const months = [
        '1', '2', '3', '4',
        '5', '6', '7', '8',
        '9', '10', '11', '12'
    ];
    const _month = months[today.getMonth()];
    
    // get Day
    const _day = date.getDate();

    // get year
    const _year = date.getFullYear();

    // loading update datetime from
    useEffect( () => {
        const intervalId = setInterval( () => { 
            setDate( new Date() )

            // hien thi kiem tra ham thoi gian va ngay thay doi 
            // console.log(date)
        }, loopTimes) 

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);

    }, [date])
    // today.getMonth
    // customr and format functions 

    // run index functions
    return (
        <div className="get-date inline">
            <span className="showDay"> {_day} </span> -
            <span className="showMonth"> {_month} </span> -
            <span className="showYear"> {_year} </span> 
        </div>
    );
}
// 

export {GetTimes, GetDates};