// 
import PropTypes from "prop-types";
import { loginAuthencation, logoutAuthencation } from "@/Service/API/ESP";


// Event dang nhap //  --------------------------------------
async function EventLogin(userName: string, password: string) {
    try {
        // Call your loginAuthencation function with the provided credentials
        const response = await loginAuthencation(userName, password);

        // Assuming the login is successful, you can redirect to another page
        if (response.status === 200) {
            // It looks like you're using sessionStorage to store the value of userName in the browser's session storage.
            // This is a common practice for storing temporary data that should be available only during the current session.
            sessionStorage.setItem('session', userName);
            // console.log( response.status);
            // console.error("Login successful:", response.data.message);

            return true; // Redirect to the admin login successful page

        } else {
            // Handle unsuccessful login, show an error message, etc.
            // console.log(false); // render view true or flase
            // console.error("Login else:");
            console.error("Error:", response.data.message);
            
            return false;
        }
    } 
    catch (error) {
        // Handle any errors that occur during the login process
        // navigate("/login"); // Redirect to the dashboard page

        // console.log(false); // render view true or flase
        // console.error("Login failed:", error);
        return false;
    }
}

// Event dang xuat
async function EventLogout() {
    try {
        // Call your loginAuthencation function with the provided credentials
        const response = await logoutAuthencation();

        // Assuming the login is successful, you can redirect to another page
        if (response.status === 200) {
            // It looks like you're using sessionStorage to store the value of userName in the browser's session storage.
            // This is a common practice for storing temporary data that should be available only during the current session.
            sessionStorage.removeItem('session');
            // console.log( response.status);
            // console.error("Login successful:", response.data.message);

            return true; // Redirect to the admin login successful page

        } else {
            // Handle unsuccessful login, show an error message, etc.

            // console.log(false); // render view true or flase
            // console.error("Login else:");
            
            return false;
        }
    } 
    catch (error) {
        // Handle any errors that occur during the login process
        // navigate("/login"); // Redirect to the dashboard page

        // console.log(false); // render view true or flase
        // console.error("Login failed:", error);
        return false;
    }
}

EventLogin.prototype = {
    userName: PropTypes.string.isRequired,
    userPassword: PropTypes.string.isRequired
    
}

export {EventLogin, EventLogout }//EventLogout