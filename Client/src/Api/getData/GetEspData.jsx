
import React, { useEffect, useState } from 'react';

import axios from 'axios';


const MY_KEY = "c16a90d21febc8e0f305efd18c3eac3c";
const MY_URL = "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}";
const MY_LINK = 'https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid='+ MY_KEY;

function GetEspDate() {

    const [espData, setEspData] = useState();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        
        const fetchData = async () => {
            try {
                // Make an API call using Axios
                const response = await axios.get(MY_LINK);
        
                // Set the retrieved data in the state
                setEspData(response.data);
                setLoading(false);

            } catch (error) {

                // Handle errors
                setError(error);
                setLoading(false);
            }
        };

    
        // Call the fetchData function when the component mounts
        fetchData();
      }, []); // Empty dependency array means this effect runs once after the initial render


    const ListWeather = () =>{

        return (
            <>
            
            </>
        )
    }

    const ShowData = () => {
        return (
            <>
                <div className='mb-3 text-lg text-red-600 '>
                    <h1>{espData.id}</h1>
                    <p>{espData.name}</p>
                    <p>{espData.dt}</p>
                    <p>{espData.cod}</p>
                    <p>{espData.base}</p>
                    <p >{espData.timezone}</p>
                </div>
                <hr />
                {/* todolist houst */}
                <div className='mt-3'>
                    cay::: 
                    {
                        espData.coord ? <span>{espData.coord.lon}</span> : null
                    } 
                </div>
                {/* Add more elements to display other properties of the data */}
            </>
        );
    }

    return (
        <div>
            {loading && <p>Loading...</p>}

            {error && <p>Error: {error.message}</p>}

            {espData && (
            // Render your data here
                <div>
                    <ShowData/>
                </div>
            )}
        </div>
    );
}

export default GetEspDate;