
import React from 'react';
import PropTypes from "prop-types";

interface TableTypes{
    data_title: any[];
    data: any[];
};

function Table( props: TableTypes ) {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/*  header body */}
                <thead className="text-xs text-center text-gray-700 uppercase bg-slate-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        {
                            props.data_title.map((item: any, index: React.Key) => (
                                <th key={index}
                                    scope="col"     
                                    className="px-6 py-3 "
                                >
                                    {item.title}
                                </th>
                            ))
                        }
                    </tr>
                </thead>

                {/* body Table */}
                <tbody>
                    {
                        props.data.map( (item: any, index: React.Key) => ( 
                            <tr key={index} className="bg-white text-center border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                                <th scope="row" className="px-6 py-4 text-left font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.Product_name}
                                </th>
                                    <td className="px-6 py-4">
                                        {item.Color}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.Category}
                                    </td>
                                    <td className="px-6 py-4">
                                        {item.Price}
                                    </td>
                                    <td className="px-6 py-4 text-center ">
                                        <a href="#" className="mx-1 font-medium text-violet-500 dark:text-blue-500 hover:underline">
                                            View
                                        </a>
                                        <a href="#" className="mx-1 font-medium text-blue-500 dark:text-blue-500 hover:underline">
                                            Edit
                                        </a>
                                        <a href="#" className="mx-1 font-medium text-green-500 dark:text-blue-500 hover:underline">
                                            Delete
                                        </a>
                                    </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

Table.prototype = {
    props: PropTypes.array.isRequired
};

export default Table