import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Privateroute from './Privateroute';
import Layout from '../component/Layout/Layout';
import DialoguBox from '../admin/container/Medicine/DialoguBox';
import Doctor from '../admin/container/Doctor/Doctor';
import DeptDialogue from '../admin/container/Department/DeptDialogue';
import DepartmentForm from '../admin/container/Department/DepartmentForm';

function Adminroute({children}) {
    return (
        <div>
            <Layout>
            <Routes>
                <Route  element={<Privateroute/>}>
                <Route exact path='/dialogubox' element={<DialoguBox/>}></Route>
                <Route exact path='/doctor' element={<Doctor/>}></Route>
                <Route exact path='/department' element={<DepartmentForm/>}></Route>
                </Route>
            </Routes>
            </Layout>
        </div>
    );
}

export default Adminroute;