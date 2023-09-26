import React from 'react';
import { BaseInputBox } from './InputBox.style';

function InputBox({...rest}) {
    return (
        <>
          <BaseInputBox {...rest}/>
            
        </>
    );
}

export default InputBox;