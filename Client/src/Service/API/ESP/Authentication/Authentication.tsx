//  Nhập một thư viện bên ngoài { axios }
import axios from "axios";

// nhap Base Url Api service api esp
const baseUrl = import.meta.env.URL_API_ESP;

//[ POST ] Xác Thực Đăng Nhập Website API ;
function loginAuthencation( userName: string, userPassword: string) {
    // link API Login 
    const loginApi = baseUrl + "api/Authentication/sign-in";

    // tập hợp các giá trị thông tin cần gửi đi đến server API
    const data = {  
        emailOrUserName: userName,
        password: userPassword
    }
    
    // return call API response server;
    return  axios.post(loginApi, data);
}

export {loginAuthencation}