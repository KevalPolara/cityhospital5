import React from 'react';
import { BaseButton, outline, primary, secondary } from './Button.style';

function Button({children,btntype='primary',btndisabled=false,...rest}) {

    const handleButton=()=>{
        switch(btntype){
            case 'primary':
                return primary
            
            case 'secondary' :
                return secondary
            
            case 'outline':
                return outline
        }
    }

const CustomButton=handleButton();

    
    return (
        <>
        <CustomButton disabled={btndisabled} {...rest}>
        {children}
        </CustomButton>
        </>
    );   
}




export default Button;