// Import the axios library Create an instance of axios with custom configurations
import instance_Esp_Data_Axios from "../Config_Server_Esp";

//[ POST ] Xác Thực Đăng Nhập Website API ;
async function loginAuthencation( userName: string, userPassword: string) {
    // const Link Authentication account
    const api_Login = "/Authentication/sign-in";

    // convert databse usernames and passwords
    const post_Data = {
        emailOrUserName: userName,
        password: userPassword
    };

    // const  response data from api;
    const response_api = await instance_Esp_Data_Axios.post(api_Login, post_Data);

    // return data res data api
    return response_api;
}

// [ POST ] Đăng Xuất Tài Khoản Website API ;
async function logoutAuthencation( userName: string, userPassword: string) {
    // const Link Authentication account
    const api_Logout = "/Authentication/sign-out";

    // convert databse usernames and passwords
    const post_Data = {
        userName,
        userPassword
    }

    // const  response data from api;
    const response_api = await instance_Esp_Data_Axios.post(api_Logout, post_Data)

    // return data res data api
    return response_api.data;
}
export {loginAuthencation, logoutAuthencation}