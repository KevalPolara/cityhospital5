import React from "react";
import Styled  from "styled-components";

const Stylebutton = Styled.button`
  display : block;
  padding : 10px 5px;
  background-color : orange;
  border :none;
  outline : none; 
  width :50%;
  color : white; 
  margin : 2.0rem auto;
`;

const Button =
  Styled.button
  `
background :${props => (props.text ? "#BF4F74" : "white")};
color :${props => (props.text ? "white" : "#BF4F74")};
font-size : 1rem;
border : 2px solid #BF4F74;
border-radius : 3px;
margin : 1rem;
`;

const Buttonone = Styled.button
`
  display: inline-block;
  color: #BF4F74;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
  display: block;
`;

const TomatoButton = Styled(Button)
`
  color: tomato;
  border-color: tomato;
`;


function Stylecomponent(props) {
  return (
    <div>
      <Stylebutton>Login</Stylebutton>
      <Button>Normal</Button>
      <Button text={true}>Primary</Button>
      <Buttonone>Normal Button</Buttonone>
      <TomatoButton>Normal Button</TomatoButton>
    </div>
  );
}

export default Stylecomponent;
