import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

function Privateroute(props) {

    let auth= useSelector(state => state.auth);
    console.log(auth);
    return (
        <div>
            {

                // OutLet Means That a Bar Header And Footer Batavche and
                // Baki Badhu Am ne Am j rehshe.
              auth.user ? <Outlet/> : <Navigate to={"/auth"} replace/>  
            }
            
        </div>
    );
}

export default Privateroute;