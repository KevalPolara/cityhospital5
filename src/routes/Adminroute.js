import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Medicine from '../admin/container/Medicine/Medicine';
import Privateroute from './Privateroute';

function Adminroute(props) {
    return (
        <div>
            <Routes>
                <Route  element={<Privateroute/>}>
                <Route exact path='/medicine' element={<Medicine/>}></Route>
                </Route>
            </Routes>
            
        </div>
    );
}

export default Adminroute;