import { useState, useEffect } from "react";

function GetTimes() {
    const [time, setTimes] = useState(new Date());

    const loopTimes = 1000; 

    useEffect( () => {
        const intervalId = setInterval( () => { 
            setTimes( new Date() )
            
        }, loopTimes) 

        return () => clearInterval(intervalId);

    }, [time]);

    const formatTime = time.toLocaleTimeString();

    return (
        <div className="get-Time inline">
            <span className="showTime">{formatTime} </span><br />
        </div>
    );
};

function GetDates() {
    const [date, setDate] = useState(new Date());
    const today = new Date();

    const loopTimes = 3600000; // gia tri cong lap thoi gian don vi ( ms )

    const months = [
        '1', '2', '3', '4',
        '5', '6', '7', '8',
        '9', '10', '11', '12'
    ];

    const _month = months[today.getMonth()];

    const _day = date.getDate();

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

    }, [date]);

    return (
        <div className="get-date inline">
            <span className="showDay"> {_day} </span> -
            <span className="showMonth"> {_month} </span> -
            <span className="showYear"> {_year} </span> 
        </div>
    );
};

export {GetTimes, GetDates};