import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { H3, Heading, SubHeadingone } from '../../components/UI/Heading/Heading';

function MedicineAllData(props) {

  let localdata = JSON.parse(localStorage.getItem("medicine"));

  const [data,SetData]=useState(localdata);

    const {id}=useParams()
    return (
        <div>
{

data.map((v)=>{
 if(v.id==id){
     return (
      <div className='container'>
       <div className="section-title">
       <Heading>{v.name}</Heading>
       <H3>{v.description}</H3>
       <p>Price :₹{v.price}</p>  
       <p>Expiry :{v.date}</p>  
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