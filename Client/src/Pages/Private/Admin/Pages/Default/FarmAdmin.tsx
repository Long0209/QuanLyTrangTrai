import React from "react";

const data_title = [
    { title: 'Product name'},
    { title: 'Color'},
    { title: 'Category'},
    { title: 'Price'},
    { title: 'edit'}
]

const data  = [
    { Product_name: 'Apple MacBook Pro 17"', Color: 'Silver', Category: 'Laptop', Price: '$2999'},
    { Product_name: 'Microsoft Surface Pro', Color: 'White', Category: 'Laptop PC', Price: '$1999'},
    { Product_name: 'Magic Mouse 2', Color: 'Black', Category: 'Accessories', Price: '$99'},
    { Product_name: 'Apple MacBook Pro"', Color: 'Silver', Category: 'Laptop', Price: '$999'},
    { Product_name: 'Microsoft Pro', Color: 'White', Category: 'PC', Price: '$199'},
    { Product_name: ' Mouse', Color: 'Black', Category: 'Access', Price: '$99'},
]


function Main_Content_Farm() {

    return(
    <>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <TableComponent data={data} data_title={data_title}/>
            </table>
        </div>
    </>
    )
}

function TableComponent ( props: any) {

    return(
        <>
            {/*  header body */}
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {
                        props.data_title.map((item: any, index: React.Key) => (
                            <th key={index}
                                scope="col"     
                                className="px-6 py-3"
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
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
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
                                <td className="px-6 py-4 text-right">
                                    <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                        </tr>
                    ))
                }
            </tbody>
        </>
    ) 
}


export {Main_Content_Farm}