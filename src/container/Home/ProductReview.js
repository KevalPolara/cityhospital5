import React, { Children } from 'react';
import { useParams } from 'react-router-dom';

function ProductReview({data}) {
    console.log(data);
    let {id}=useParams();
    return (
        <div>
            
            {
                <>
                <h1>This is a ProductReview Page:{id}</h1>
                <p></p>
                </>
            }
            
            
                
            
            
            
            
        </div>
    );
}

export default ProductReview;