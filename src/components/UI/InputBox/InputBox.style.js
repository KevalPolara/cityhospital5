import styled from "styled-components";


export const BaseInputBox= styled.input
`
    border-radius: 0;
    box-shadow: none;
    font-size: 14px;
    padding: 10px !important;
    height: 44px;


    &:focus{
        border-color: #FF6337;
        box-shadow :none;
    }

`
export const InputEror=styled.span
`
color :red;

`

