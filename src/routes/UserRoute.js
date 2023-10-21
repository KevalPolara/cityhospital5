import React, { useState } from 'react';
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
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import MedicineData from "../container/Medicine/MedicineData"
import MedicineAllData from '../container/Medicine/MedicineAllData';
import Form from '../container/Form/FormOne';
import Appointment1 from '../container/Form/Appointment1';
import Formone from '../container/Form/FormOne';
import Counter from '../container/Counter/Counter';
import Cart from '../container/Cart/Cart';


function UserRoute(props) {
  const [counter,SetCounter]=useState(0);
  const [badgeCount, setBadgeCount] = useState(0);
  const [fav,SetFav]=useState([]);

    return (
        <>
       <Header counter={counter} fav={fav} />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/department" element={<Department />} />
        <Route path="/dataform" element={<Formone/>} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/counter" element={<Counter />} /> */}
        <Route path="/contact/" element={<Contact />}/>
        <Route element={<Privateroute/>}>
        <Route path="/appointement" element={<Appointement />} />
        <Route path="/dept/:id" element={<Dept/>}/>
        </Route>
        <Route path="/auth" element={<Auth />} />        
        <Route path="/cart" element={<Cart />} />        

        <Route path="/productreview/:id" element={<ProductReview/>} />
        <Route path="/medicine" element={<MedicineData increment={SetCounter} fav={fav} SetFav={SetFav}/>} />
        <Route path="/medicinealldata/:id" element={<MedicineAllData/> } />

        {/* <Route path='*' element={<Error/>}/> */}
        {/* <Route path="/*" element={<Error/>} /> */}
      </Routes>
      <Footer/>  
        </>
    );
}

export default UserRoute;