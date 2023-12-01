
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';

import data from '@/Api/Databases/espdata.json';
// const database Api 

// const 
const dataLabels  = ["label_1","label_2","label_3","label_4","label_5","label_6","label_7"]

const dataView = {
    labels: dataLabels,
    datasets: [
        {
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: true,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
            redraw:true
        }
    ]
}

function FarmChart() {
    return (
        <>
            <Line data={dataView} className='select-none'></Line>
        </>
    )
}

export default FarmChart;