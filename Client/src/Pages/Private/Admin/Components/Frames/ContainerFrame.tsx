
import { CiTempHigh } from "react-icons/ci"; // icons nhiet do
import { RiWaterPercentLine } from "react-icons/ri"; // icons do am
import { TiWeatherWindy } from "react-icons/ti"; // icons gia 
import { RiTreeFill } from "react-icons/ri"; //icons cay 

function ContainerFrame() {
    
    return (
        <div className=" text-center items-center w-min flex flex-col">
            <div className="flex justify-center items-center border border-stone-600 shadow p-auto w-20 h-20 rounded-full">
                <div className="flex justify-center items-center text-sky-400">
                    <span className="text-center items-center w-auto h-auto text-3xl italic ">
                        32 
                    </span>
                    <span className="text-blue-700 text-4xl">
                        <CiTempHigh />
                    </span>
                </div>
            </div>
            <div className="w-max font-mono text-md text-purple-700 italic text-center items-center ">
                    <span className="text-sm font-sans "> Tieu De Hien Thi  </span>
                </div>
        </div>
    )
}

export default ContainerFrame