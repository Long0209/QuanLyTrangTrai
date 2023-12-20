

// 
import axios from "axios";


// const linkPost = "http://localhost:5048/api/Authentication/sign-in";
// const linkGet = "http://localhost:5048/api/user/EspDevices/get-esp-device-owner?PageIndex=1&PageSize=50";

// link Login 
const linkAuthLoginPost = "http://localhost:5048/api/Authentication/sign-in";


function authLogin( userName: string, userPassword: string) {
    // const Status 
    let status = "402";

    // const data get post api data
    let data = { 
        emailOrUserName: userName, 
        password: userPassword
    }
    
    try {
        // Replace 'https://api.example.com/data' with your actual API endpoint
        axios.post(linkAuthLoginPost, data)
            .then (
                (res) => {
                    status = res.status.toString();
                }
            )
            .catch (
                
            )
            .finally(
                () => {status = "402"}
            )
        

        // console.log( response.request );
        // console.log("status:" + response.request.status);
        // console.log("text:" + response.request.statusText);

    } 
    
    catch (error) {
        // ham hien thi loi
        // console.log(error);

        return ( () => error) // tra ve loi

    }

    finally {
        // ham hien thi du lieu database
        // console.log(data);

        status = "402";
    }

}

export {authLogin}