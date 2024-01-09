import React from 'react';

// data user
import {data_farm_12} from "@/Databases/Data_Test";

function Farm_user() {
    
    return (
        <React.Fragment>
            <table className='item-center text-center w-full h-auto '>
                <thead>
                    <tr className=' uppercase text-violet-400'>
                        <th>id</th>
                        <th>temp</th>
                        <th>hum</th>
                        <th>charge</th>
                        <th>probe</th>
                        <th>device</th>
                        <th>TimeStamp</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data_farm_12.map( (item, index) => {

                            return (
                                <tr key={index}
                                    className='border-2 p-10'
                                >
                                    <td> {item.id} </td>
                                    <td>{item.temp}</td>
                                    <td>{item.hum}</td>
                                    <td>{item.charge}</td>
                                    <td>{item.probe}</td>
                                    <td>{item.device}</td>
                                    <td>{item.TimeStamp}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        
        </React.Fragment>
    );
};

export default Farm_user;