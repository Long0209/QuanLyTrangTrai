
import React from 'react';

function FromSignAccount() {
    return (
        <div className='form-register select-none w-full h-max  flex justify-center'>
            <form action="" className='p-2 w-96'>
                {/* nameLogin */}
                <div className="form-item flex flex-col">
                    <label htmlFor="nameSign" > Ten Dang Nhap </label>
                    <input type="text" id="nameSign" autoComplete='off' 
                        placeholder='Nguyen Van A' 
                        className="text-sm font-normal rounded-md h-9"  
                    />
                </div>

                {/* pass */}
                <div className="form-item flex flex-col">
                    <label htmlFor="password" > Mat Khau </label>
                    <input type="text" id="password" autoComplete='off' 
                        className="text-sm font-normal rounded-md h-9 "  
                    />
                </div>

                {/* config  pass */}
                <div className="form-item flex flex-col">
                    <label htmlFor="conPassword" > Xac Nhan Mat Khau </label>
                    <input type="text" id="conPassword" autoComplete='off' 
                        className="text-sm font-normal rounded-md h-9 "  
                    />
                </div>

                    {/* config infomation form register user */}
                {/* name User */}
                <div className="form-item flex flex-col">
                    <label htmlFor="name" > Ten Khach Hang </label>
                    <input type="text" id="name" autoComplete='off' 
                        placeholder='Nguyen Van A' 
                        className="text-sm font-normal rounded-md h-9 "  
                    />
                </div>

                {/* numberphone */}
                <div className="form-item flex flex-col">
                    <label htmlFor="numberPhone" > So Dien Thoai </label>
                    <input type="text" id="numberPhone" autoComplete='off' 
                        className="text-sm font-normal rounded-md h-9 "  
                    />
                </div>

                {/* brithDay */}
                <div className="form-item flex flex-col">
                    <label htmlFor="brithDay" > Ngay Sinh </label>
                    <input type="date" id="brithDay" autoComplete='off' 
                        
                        className="text-sm font-normal rounded-md h-9 "  
                    />
                </div>

                {/* address */}
                <div className="form-item flex flex-col">
                    <label htmlFor="address" > Dia Chi </label>
                    <input type="text" id="address" autoComplete='off' 
                        className="text-sm font-normal rounded-md h-9 " 
                    />
                </div>


            </form>
        </div>
    )
}

export default FromSignAccount;