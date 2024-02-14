import styled from "styled-components";
// import { NavLink } from 'react-router-dom';

export const HeaderSection = styled.header`

@media(max-width: 600px){
	display: flex;
    justify-content: space-around;
	font-size: 14px;
	padding: 10px 0; 
	background-color: red;
}
	


@media(min-width: 600px){
	display: flex;
    justify-content: space-between;
	max-width: 1200px;
	margin-right: auto;
    margin-left: auto;
	color: var(----button-color-hover);
	padding: 15px 0; 
	border: 1px solid red;
}
`

export const Logo = styled.div`
margin-left: 20px;

p{
	font-family: "Poppins", sans-serif;
    font-weight: 200;
	color: black;
	font-size: 28px;
	background-color: var(--button-color);
	padding: 5px; 
	border: 1px solid #1652F0;
  border-radius: 8px;
  box-sizing: border-box;
}

span{
	color: var(--button-color);
	background-color: black;
	border-radius: 8px;

	
}

`

export const Navigation = styled.div`
	margin: auto 20px auto 0;
`