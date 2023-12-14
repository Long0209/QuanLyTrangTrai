

// import { link } from 'fs'

function HomeLuan() {
    return ( 
        <div  className=' m-0 p-0 w-full text-xl first-letter:'>
            <div className=' text-center pb-5'>
                <div className=' p-5'>
                    <p className=' p-4 text-3xl'>BẢNG ĐIỀU KHIỂN THÔNG KÊ DỮ LIỆU THỰC</p>
                    <form action="" method="post">
                        <label htmlFor="">Chọn trang trại :</label>
                        <select className=' border-black rounded-full p-1  border-2' name="" id="">
                            <option value="">--Nông trại 1--</option>
                            <option value="">--Nông trại 2--</option>
                            <option value="">--Nông trại 3--</option>
                        </select>
                        <button className=' bg-gray-900 rounded-full text-gray-50 p-1  border-2' type="submit">Chọn</button>
                    </form>
                </div>
                <div className=' inline-flex gap-9 w-9/12'>
                    <div className=' w-5/12 bg-gray-900 rounded-full text-gray-50'>
                        <div className=' inline-flex p-5'>
                            <div>
                                <img className=' w-14' 
                                src="./public/Icon-nhiet-do-4-2.png" 
                                alt="" /> 
                            </div>
                            <div>
                                <p>
                                    Temperature
                                </p>
                                <p>301 °C</p> 
                            </div>
                        </div>
                    </div>
                    <div className=' bg-gray-900 rounded-full text-gray-50 w-5/12'>
                        <div className=' inline-flex p-5 '>
                            <div>
                                <img className=' w-14'  src="./public/Icon-nhiet-do-4-2.png" alt="" />
                            </div>
                            <div>
                                <p>
                                    Humidity
                                </p>
                                <p>
                                    586 %
                                </p>
                            </div>
                        </div>
                        
                    </div>
                    <div className=' bg-gray-900 rounded-full text-gray-50 w-5/12'>
                        <div className=' inline-flex p-5'>
                            <div>
                                <img className=' w-14'  src="./public/Icon-nhiet-do-4-2.png" alt="" />
                            </div>
                            <div>
                                <p>
                                    Probe
                                </p>
                                <p>
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' bg-gray-900 rounded-full text-gray-50 w-5/12'>
                        <div className=' inline-flex p-5'>
                            <div>
                                <img className=' w-14'  src="./public/Icon-nhiet-do-4-2.png" alt="" />
                            </div>
                            <div>
                                <p>
                                    Charge
                                </p>
                                <p>
                                    0
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
            <div className='inline-flex gap-5 w-full'>
                <div className=' ml-9'>
                    <label className='' htmlFor="">Biểu đồ\ dữ liệu số :</label>
                </div>
                <div>
                <label className="relative inline-flex items-center mb-5 cursor-pointer">
                    <input type="checkbox" value="" className="sr-only peer"/>
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>   
                </label>
                </div>
            </div>
        </div>
    )
}

export default HomeLuan;