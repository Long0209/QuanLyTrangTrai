
import React, { useEffect } from 'react';

// icons error
import { TbFaceIdError } from "react-icons/tb";

// import image pages
import ImageError2 from '@/Dist/Images/imagePageError.jpg';



function PageError() {

    return (
        <>
            <div className="flex items-center justify-center max-h-screen select-none">
                <div className='absolute flex flex-col items-center top-1/3 '>

                    <TbFaceIdError className='w-20 h-20 mb-5 text-purple-500'/>

                    <div className=" bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 " >
                        <span className='text-5xl uppercase text-transparent'>
                            No sreach Pages
                        </span>
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default PageError;