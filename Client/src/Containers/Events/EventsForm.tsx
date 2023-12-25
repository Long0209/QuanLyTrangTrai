
import { loginAuthencation } from "@/Service/API/ESP";


// Event dang nhap //  --------------------------------------
async function EventLogin(userName: string, password: string) {
    try {
        // Call your loginAuthencation function with the provided credentials
        const response = (await loginAuthencation(userName, password)).data;

        // Assuming the login is successful, you can redirect to another page
        if (response.status === 200) {
            sessionStorage.setItem('session', userName);
            return true; // Redirect to the dashboard page
            // console.error("Login successful:", response.data.message);
        } else {
            // Handle unsuccessful login, show an error message, etc.
            return false;
        }
    } 
    catch (error) {
        // Handle any errors that occur during the login process
        // navigate("/login"); // Redirect to the dashboard page
        console.error("Login failed:", error);
    }

}

// Event dang xuat
async function EventLogout() {
    
}

export {EventLogin, EventLogout }//EventLogout