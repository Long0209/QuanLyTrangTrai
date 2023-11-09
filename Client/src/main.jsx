
import React from "react";
import ReactDOM  from "react-dom/client";


// import _Layout
import App from "./App";


//  _Render pages layout

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
)