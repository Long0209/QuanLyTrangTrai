
import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogOut() {
    const session =  sessionStorage.getItem('session');
    const navigate = useNavigate();

    console.log("session: " + session );

    const log = React.useEffect( () => {
        if (!session){ 
            return navigate("/admin");
        } 
            sessionStorage.removeItem('session');
            return navigate("/");
        },[]
    );
    log;
}

export default LogOut