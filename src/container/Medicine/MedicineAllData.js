import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { H3, Heading, SubHeadingone } from '../../components/UI/Heading/Heading';
import { useSelector } from 'react-redux';

function MedicineAllData(props) {

  let localdata = JSON.parse(localStorage.getItem("medicine"));

  const m1=useSelector(state=>state.medicines)

  const [data,SetData]=useState(localdata);

    const {id}=useParams()
    return (
        
        <div>
        <br></br>
        <br></br>
{

m1.medicine.map((v)=>{
 if(v.id==id){
     return (
      <div className='container'>
       <div className="section-title">
       <Heading>{v.name}</Heading>
       <H3>{v.desc}</H3>
       <p>Price :₹{v.price}</p>  
       <p>Expiry :{v.expiry}</p>  
        </div>
        <p></p> 
     </div>
     )
 }          
})
}
           
            
        </div>
    );
}

export default MedicineAllData;