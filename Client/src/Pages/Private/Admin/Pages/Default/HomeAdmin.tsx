import React from 'react';
import ContainerFrame from "@/Components/Frames/ContainerFrame";
import ChartLineDouble from "@/Components/Chart/ChartLineDouble";

import { table_data, table_data_title } from '@/Databases/Data_Test';
const Table = React.lazy( () => import('@/Components/Table/Table'));

import { CiTempHigh } from "react-icons/ci";
import { WiWindBeaufort0 } from "react-icons/wi"; // icons winds
import { WiNightAltRainWind } from "react-icons/wi"; // icons lavi
import { FcLandscape } from "react-icons/fc"; //icon night


function Main_Content_Home() {

    return (
        <>
            <div className="shadow-orange-200 shadow-sm">
                <div className="border border-stone-100 shadow-neutral-200 shadow-sm w-full flex justify-around py-4 px-auto gap-x-1 ">
                    {/* khung 1 */}
                    <div className="frame-items ">
                        <ContainerFrame value={"32"} icons={<CiTempHigh/>} title={"khung 1"}/>
                    </div>

                    {/* khung 2 */}
                    <div className="frame-items">
                        <ContainerFrame  value={"24"} icons={<WiNightAltRainWind/>} title={"khung 2"}/>
                    </div>

                    {/* khung 3 */}
                    <div className="frame-items">
                        <ContainerFrame  value={"23"} icons={<WiWindBeaufort0/>} title={"khung 3"}/>
                    </div>

                    {/* khung 4 */}
                    <div className="frame-items">
                        <ContainerFrame  value={"12"} icons={<FcLandscape/>} title={"khung 4"}/>
                    </div>
                </div>

                {/* chart */}
                <div className="chart-double">
                    <ChartLineDouble />
                </div>

                {/* table */}
                <div className="drop-table">
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <div id="accordion-flush-title-1" className=" my-2">
                            <button type="button" 
                                data-accordion-target="#accordion-flush-content-1" 
                                aria-expanded="true" 
                                aria-controls="accordion-flush-content-1"
                                className="flex items-center justify-between w-full
                                    bg-violet-100 rounded-md px-7 py-2 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" 
                            >
                                <span className=" text-xl uppercase text-black"> hien thi thong tin du lieu </span>
                                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </div>
                        {/* content table */}
                        <div id="accordion-flush-content-1" className="hidden" aria-labelledby="accordion-flush-title-1">
                            <div className="table-values">
                                <React.Suspense fallback={<div> Loading...</div>}>
                                    <Table data={table_data} data_title={table_data_title}/>
                                </React.Suspense>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export {Main_Content_Home}

