import React, { Children, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heading } from '../../components/UI/Heading/Heading';

function ProductReview(pros) {
  const [data, SetData] = useState([]);
 
    let {id}=useParams();

    const getData = async () => {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/comments"
        );
    
        const fdata = await response.json();
        console.log(fdata);
        SetData(fdata);
      };

      useEffect(() => {
        getData();
      }, []);
    
    return (
        <div>
            {

               data.map((v)=>{
                if(v.id==id){
                    return (
                     <div className='container'>
                      <div className="section-title">
                      <Heading>{v.name}</Heading>
                      <h5>My Id is :{v.id}</h5>
                      <p>{v.body}</p>  
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

export default ProductReview;