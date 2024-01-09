
// import chartjs . doubelement
import { Line } from "react-chartjs-2";


const label1 = ["15", "32", "55", "7", "5", "64", "43"];                 //  du lieu hien thi theo truc Y
const label2 = ["65", "23", "78", "34", "55", "50", "78"];          //  du lieu hien thi theo truc Y
const labels = ["110", "220", "330", "440", "550", "660", "770"];   //  du lieu hien thi theo truc x

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Nhiet Do',
            data: label1,
            borderWidth:"1",  // looix o day ke mia no mien chay
            borderColor: "rgb(229, 108, 108)",
            backgroundColor: "rgb(229, 108, 108)",
            tension: 0.3,
        },
        {
            label: 'Do Am',
            data: label2,
            borderWidth:"1",  // looix 0 day ke mia no mien chay
            borderColor: "rgb(107, 231, 250)",
            backgroundColor: "rgb(107, 231, 250)",
            tension: 0.3
        }
    ]
};

// const labels = ["1", "2", "3", "4", "5", "6", "7"];
// const data = {
//     labels: labels,
//     datasets: [{
//         label: 'My First Dataset',
//         data: [65, 59, 80, 81, 56, 55, 40],
//         fill: false,
//         borderColor: 'rgb(75, 192, 192)',
//         tension: 0.1
//     }]
// };


// dung de dinhj dang cac hieu ung ben ngoai thme vao hien thi bieu do
// cai ham ngu chs nso sau
const config = {
    // plugins: {
    //     chartAreaBorder: {
    //     borderColor: 'red',
    //     borderWidth: 2,
    //     borderDash: [5, 5],
    //     borderDashOffset: 2,
    //     }
    // }
};


// export render functions
function ChartLineDouble() {

    return (
        <div>
            <Line data={data} options={config} />
        </div>
    )
}

export default ChartLineDouble