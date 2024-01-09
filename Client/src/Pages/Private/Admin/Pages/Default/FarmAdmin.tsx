import Table from "@/Components/Table/Table";

import { table_data, table_data_title } from "@/Databases/Data_Test";


function Main_Content_Farm() {

    return(
    <>
        <div className="data-farm-table">

            <Table data={table_data} data_title={table_data_title}/>
        </div>
    </>
    )
}


export {Main_Content_Farm};