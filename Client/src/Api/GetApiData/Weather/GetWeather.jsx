
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// 
const KEY_API_WEATHER = "c16a90d21febc8e0f305efd18c3eac3c";

const URL_API_WEATHER = "https://api.openweathermap.org/data/2.5/";

function GetWeather() {
    const [data, setData] = useState([])

    // link test api 
    const link = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=c16a90d21febc8e0f305efd18c3eac3c';

    // use effect api 
    useEffect ( () => {
        // use call 
            axios.get(link)
                .then( (res) => console.log(res.data) )
                .catch( (err) => console.log(err) )

    //  end use effect 
    }, []);


    
    return (
        <>
            <span>asda</span>
        </>
    )
}

export default GetWeather;