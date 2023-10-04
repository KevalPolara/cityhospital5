import React from 'react';
import About from "../container/About/About";
import Appointement from "../container/Appointement/Appointement";
import Auth from "../container/Auth/Auth";
import Contact from "../container/Contact/Contact";
import Department from "../container/Department/Department";
import Doctor from "../container/Doctor/Doctor";
import Home from "../container/Home/Home";
import { Routes, Route } from "react-router-dom";
// import Error from "../container/Home/Error/Error";
import Privateroute from './Privateroute';
import Dept from '../container/Department/Dept';
import ProductReview from '../container/Home/ProductReview';

function UserRoute(props) {
    return (
        <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<Department />} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact/" element={<Contact />}/>
        <Route element={<Privateroute/>}>
        <Route path="/appointement" element={<Appointement />} />
        <Route path="/dept/:id" element={<Dept/>} />
        </Route>
        <Route path="/auth" element={<Auth />} />
        <Route path="/productreview/:id" element={<ProductReview/>} />

        {/* <Route path='*' element={<Error/>}/> */}
        {/* <Route path="/*" element={<Error/>} /> */}
      </Routes>
            
        </>
    );
}

export default UserRoute;