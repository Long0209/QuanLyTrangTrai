
import React from "react";
import { useNavigate } from 'react-router-dom';
// import { loginAuthencation } from "@/Service/API/ESP";
import { EventLogin } from "@/Containers";


// Custorms form Login and logic form login Authencations Account ; 
function LoginFrom(){
    let navigate = useNavigate();
    const [userName, setUserName] = React.useState(String) || null;
    const [password, setPassword] = React.useState(String) || null;
    
    // su ly su kien dang nhap
    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const login = await EventLogin(userName, password) ;
        
        if(!(login === true)){
            navigate("/login");
            console.error("Login false:....");
            
        } else {
            navigate("/admin");
            console.error("Login successful:....");
        }
    }

// It looks like you've provided a JSX code snippet for a form component in a React application. 
// This form appears to be a login form with fields for the user's email, password, and a "Remember me" checkbox
// There's also a "Forgot password?" link and a "Sign up" link
    return (
        <form className="space-y-4 md:space-y-6" >
            {/* user name */}
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="text" name="email" id="email" autoComplete='off' 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" 
                    required={true || undefined}
                    onChange={ (e) => {
                        setUserName(e.target.value)
                        // console.log(e.target.value);
                    }}
                />
            </div>

            {/* user password */}
            <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <input type="password" name="password" id="password" placeholder="••••••••" 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    required={true || undefined}
                    onChange={ (e) => {
                        setPassword(e.target.value)
                        // console.log(e.target.value);
                    }}
                />
            </div>

            {/* check box */}
            <div className="flex items-center justify-between">
                <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input id="remember" aria-describedby="remember" type="checkbox" 
                            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3  dark:bg-gray-700 dark:border-gray-600 dark: dark:ring-offset-gray-800" 
                            required={false || undefined}
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                    </div>
                </div>
                <a href="#" className="text-sm font-medium hover:underline ">htmlForgot password?</a>
            </div>
            {/* button submit */}
            <button 
                className="w-full transition ease-in-out delay-50 text-gray-600 hover:bg-blue-500 hover:text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center border-2 border-zinc-100"
                onClick={handleLogin}
            >
                Sign in
            </button>
            
            {/* title emssges account */}
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet? 
                <a href="#" className="font-medium text-blue-600 hover:underline dark:text-blue-600 500 hover:decoration-solid hover:text-blue-500 ">Sign up</a>
            </p>
        </form>
    )
}

// Render container form login user authencation;
// Authencation account is user or admin login and role 
export default function Login() {

    // Return render components form login 
    return (
        <section className="dark:bg-gray-900 ">

            <div className="flex flex-col items-center justify-center px-6  mx-auto h-max m-20">
                <div className="flex flex-col items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white select-none">
                    <img className="w-8 h-8 mr-2 " src="./vite.svg" alt="logo"/>
                    <span className='mt-2'>
                        {/*
                            {
                                (!status) ? <span> Đăng Nhập </span> : <span> {status} </span>  
                            } 
                        */}
                        <span> Đăng Nhập </span>
                    </span>
                </div>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        {/* Login Form  */}
                        <LoginFrom/>
                    </div>
                </div>
            </div>
        </section>
    )
}
