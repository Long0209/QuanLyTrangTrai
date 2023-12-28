// Import the axios library Create an instance of axios with custom configurations
import instance_Esp_Data_Axios from "../Config_Server_Esp";

// [ POST ] get_Farm_Esp_ALL esp all form server 
async function get_Farm_Esp_ALL(page_index: number, page_size: number) {
    const api_get_farm_all = "api/FarmManager/get-all-farm";
    
    // convert  data
    const data ={
        "pageIndex": page_index,
        "pageSize": page_size
    }
    
    // response method
    const response = await instance_Esp_Data_Axios.post(api_get_farm_all, data)
    return response;
}

// [ GET ] http://localhost:5048/api/v1/customer/esp-device/owned-esp-devices?PageIndex=1&PageSize=50
async function get_esp_owned_devices(page_index: number, page_size: number) {
    const api_get_esp_owned_devices = 
        `api/v1/customer/esp-device/owned-esp-devices?PageIndex=${page_index}&PageSize=${page_size}`;

    // console.log("api_get_esp_owned_devices: >> " + api_get_esp_owned_devices);

    // response method
    const response = await instance_Esp_Data_Axios.get(api_get_esp_owned_devices)
    // 
    return response;
}

// [ GET ] http://localhost:5048/api/v1/customer/esp-device/owned-esp-devices?PageIndex=1&PageSize=50
async function get_esp_data (devices_Id: number , results_Size: number){
    const api_get_esp_data = 
        `api/v1/customer/esp-device/esp-data?deviceId=${devices_Id}&resultSize=${results_Size}`;

    // response method
    const response = await instance_Esp_Data_Axios.get(api_get_esp_data)
    // 
    return response;
}

export {get_Farm_Esp_ALL, get_esp_owned_devices, get_esp_data}