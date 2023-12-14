
// 
import { useState, useEffect } from 'react';

// tao fun son loading dong ho
function HomeAdmin() {
    const [currentTime, setCurrentTime] = useState(new Date());

    
    useEffect( () => {
        const intervalId = setInterval( () => { 
            setCurrentTime( new Date() )

        }, 1000) 

        // Cleanup the interval when the component is unmounted
        return () => clearInterval(intervalId);

    }, [])

    // Empty dependency array to run the effect only once on mount
    const formattedTime = currentTime.toLocaleTimeString();

    const xday = currentTime.getDay().toString();
    const xmon = currentTime.getMonth().toLocaleString();

    // run index functions
    return (
        <>
            Admin - Home - Time:{formattedTime}
            <br />
            day - {xday}
            <br />
            mon - {xmon}
        </>
    );
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