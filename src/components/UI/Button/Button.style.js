import styled from "styled-components";

const BaseButton=styled.button
`   
    border: 0;
    padding: 10px 35px;
    transition: 0.4s;
    border-radius: 50px;
    cursor :pointer;

    &:hover{
        background: ${props=> props.disabled ? 'grey' :'#1c84e3'};
    }
`

export const primary=styled(BaseButton)
`
background:${props=> props.disabled ? 'grey' :'#FF6337'};
color: #fff;
`

export const secondary=styled(BaseButton)
`
background: ${props=> props.disabled ? 'grey' :'#8d41fa'};
color: #fff;
`

export const outline=styled(BaseButton)
`
background: ${props=> props.disabled ? 'grey' :'#3c97db'};
color: #fff;

&:hover{
    background : ${props=> props.disabled ? 'grey' :'#000'} ;
}

`