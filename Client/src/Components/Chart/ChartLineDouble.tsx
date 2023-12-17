
// import chartjs . doubelement
import { Line } from "react-chartjs-2";


const label1 = ["15", "32", "55", "7", "5", "64", "45"];                 //  du lieu hien thi theo truc Y
const label2 = ["65", "23", "78", "34", "55", "50", "65"];          //  du lieu hien thi theo truc Y
const labels = ["110", "220", "330", "440", "550", "660", "770"];   //  du lieu hien thi theo truc Y

const data = {
    labels: labels,
    datasets: [
        {
            label: 'Nhiet Do',
            data: label1,
            borderColor: "red",
            backgroundColor: "red",
            tension: 0.3
        },
        {
            label: 'Do Am',
            data: label2,
            borderColor: "blue",
            backgroundColor: "blue",
            tension: 0.3
        }
    ]
};


// export render functions
function ChartLineDouble() {

    return (
        <div>
            ChartLineDouble
            <Line data={data} />
        </div>
    )
}

export default ChartLineDouble