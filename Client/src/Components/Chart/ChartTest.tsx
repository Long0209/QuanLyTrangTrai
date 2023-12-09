
// src/ChartComponent.jsx
import { Bar } from "react-chartjs-2";

const ChartTest = () => {
    const data = {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
        {
            label: 'Chart Example',
            data: [12, 19, 3],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1,
        },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Bar Chart Example</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default ChartTest;
