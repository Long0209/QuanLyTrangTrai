
import React from "react";
import ReactDOM  from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// import _Layout
import App from "./Routers/App";

// import css style
import 'tailwindcss/tailwind.css';


//  _Render pages layout

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </React.StrictMode>,
)