// Import the axios library
import axios from "axios";

// Import the environment variable from Vite's import.meta.env
const baseUrl = import.meta.env.VITE_URL_API_ESP_DATA;

// Create an instance of axios with custom configurations
const instance_Esp_Data_Axios = axios.create({
    baseURL: baseUrl, // Set the base URL for all requests
    timeout: 1000, // Set the timeout for requests to 1000 milliseconds (1 second)
    withCredentials: true, // Enable sending and receiving cookies
    headers: {
        'X-Custom-Header': "foobar",
        'content-type': "application/json; charset=utf-8 ",
    } // Set custom headers for all requests
});

// Export the configured axios instance for reuse in other parts of your application
export default instance_Esp_Data_Axios;