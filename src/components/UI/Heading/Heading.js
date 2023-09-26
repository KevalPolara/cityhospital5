import styled from "styled-components";

export const Heading = styled.h2
`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
  color: #2c4964;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 120px;
    height: 1px;
    background: #ddd;
    bottom: 1px;
    left: calc(50% - 60px);
  }

  &:after {
    content: '';
    position: absolute;
    display: block;
    width: 40px;
    height: 3px;
    background: #ff6337;
    bottom: 0;
    left: calc(50% - 20px);
  }
`;

export const H3=styled.h3
`
font-size: 18px;
font-weight: bold;
margin: 10px 0 5px 0;
color: #111;
`

export const Aeshthree=styled.h3
`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #2c4964;
`

export const H4=styled.h4
`
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 25px;
  color: #2c4964;
`

export const H3A=styled.h3
`
font-size: 28px;
  font-weight: 700;
  color: #2c4964;
  margin-bottom: 15px; 
`

export const Headings=styled.h4

`
padding: 0 0 0 60px;
font-size: 22px;
font-weight: 600;
margin-bottom: 5px;
color: #2c4964;
`

export const SubHeading=styled.span
`
  display: block;
  font-size: 15px;
  padding-bottom: 10px;
  position: relative;
  font-weight: 500;
`

export const SubHeadingone=styled.p
`
padding: 0 0 0 60px;
margin-bottom: 0;
font-size: 14px;
color: #4b7dab;
`

