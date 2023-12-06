
import React, {useState, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

import Data from '@/Api/Databases/espDataTop12.json';
import { data } from 'autoprefixer';
// const database Api 

// const 
const dataLabels  = ["label_1","label_2","label_3","label_4","label_5","label_6","label_7"]


function FarmChart() {
    const [espData, setEspData] = useState(Data);
    const [espId, setEspId] = useState();

    const [espTime, setEspTime] = useState([]);
    const [espTemp, setEspTemp] = useState([]);
    const [mes, setMes] = useState(true);
    const [show, setShow] = useState(false);

    useEffect (  () => {
        
        console.log(espData)

        console.log(espTemp)

        const loadingData =  () => {
            try {
                setEspTime(espData.TimeStamp);
                espTemp(espData.temp);
                
            } catch (error) {
                setMes(false)
            }
        }

        loadingData();

    }, [])

    // 
    const DataViewsEspDataTemp = {
        labels: espData.map(item => item.TimeStamp),
        datasets: [
            {
                label: 'esp-Data-Temp',
                data: espData.map(item => item.temp),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                redraw:true
            }
        ]
    }

    // 
    const DataViewsEspDataHum = {
        labels: espData.map(item => item.TimeStamp),
        datasets: [
            {
                label: 'esp-Data-Hum',
                data: espData.map(item => item.hum),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                redraw:true
            }
        ]
    }

    // 
    const DataViewsEspDataProbe = {
        labels: espData.map(item => item.TimeStamp),
        datasets: [
            {
                label: 'esp-Data-Probe',
                data: espData.map(item => item.probe),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                redraw:true
            }
        ]
    }

    // /
    const DataViewsEspDataCharge = {
        labels: espData.map(item => item.TimeStamp),
        datasets: [
            {
                label: 'esp-Data-Charge',
                data: espData.map(item => item.charge),
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                redraw:true
            }
        ]
    }
    
    

    return( 
        <>
            <div className='flex justify-between mx-3 scroll-auto overflow-x-auto h-72'>
                <Line data={DataViewsEspDataTemp} className='select-none'></Line>
                <Line data={DataViewsEspDataHum} className='select-none'></Line>
            </div>
            <div className='flex justify-between mx-3 scroll-auto overflow-x-auto  h-72'>
                {/* <Line data={DataViewsEspDataProbe} className='select-none'></Line> */}
                <Line data={DataViewsEspDataCharge} className='select-none'></Line>
                <Line data={DataViewsEspDataCharge} className='select-none'></Line>

            </div>

            {/* {
                espData.map( (item, index) =>{
                    return (
                        <>
                                <span key={index}> {item.id}</span>
                                <span key={index}> {item.temp}</span>
                                <span key={index}> {item.TimeStamp}</span> <br /> <hr />
        
                        </>
                    )
                })
            } */}

        </>
    )
}

export default FarmChart;