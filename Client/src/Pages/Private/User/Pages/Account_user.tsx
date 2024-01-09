import React from 'react';


function Account_user() {

    return (
        <React.Fragment>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white">
                    <form className=' select-none'>
                        <div className="mb-5">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Full Name
                                </label>
                            <input disabled
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Full Name"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="phone"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Phone Number
                            </label>
                            <input disabled
                                type="text"
                                name="phone"
                                id="phone"
                                placeholder="Enter your phone number"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                            >
                            Email Address
                            </label>
                            <input disabled
                                type="email"
                                name="email"
                                id="email"
                                placeholder="Enter your email"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                            />
                        </div>

                        <div className="-mx-3 flex flex-wrap">
                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                    htmlFor="date"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Date
                                </label>
                                <input disabled
                                    type="date"
                                    name="date"
                                    id="date"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            </div>
                            <div className="w-full px-3 sm:w-1/2">
                            <div className="mb-5">
                                <label
                                htmlFor="time"
                                className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                Time
                                </label>
                                <input disabled
                                type="time"
                                name="time"
                                id="time"
                                className="w-full rounded-md border border-[#e0e0e0] bg-white text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Account_user;