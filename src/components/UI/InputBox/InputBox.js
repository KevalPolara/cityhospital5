import React from 'react';
import { BaseInputBox, InputEror } from './InputBox.style';

function InputBox({errortext,...rest}) {
    return (
        <>
          <BaseInputBox {...rest}/>
          <InputEror>
          {errortext}
          </InputEror>
            
        </>
    );
}

export default InputBox;