import styled from 'styled-components'


export const FilterForm = styled.form`
display: flex;
gap: 18px;
justify-content: center;
flex-wrap: wrap;

label{
height: 74px;
color: rgb(138, 138, 137);
font-family: Manrope;
font-size: 14px;
font-weight: 500;
line-height: 18px;
text-align: left;
}

input{
	box-sizing: border-box;
	border: none;
	border-right: 1px solid rgba(138, 138, 137, 0.2);
	border-radius: 14px 0px 0px 14px;
	background: rgb(247, 247, 251);
	padding: 14px 18px;
	max-width: 160px;

	color: rgb(18, 20, 23);
	font-family: Manrope;
	font-size: 18px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;

}


	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
    -webkit-appearance: none;
}

input:last-child{
	border-radius: 0px 14px 14px 0px;
}
`

export const FilterFormInput = styled.div`
display: flex;
margin-top: 8px;
max-width: 320px;
`

export const FilterFormButton = styled.button`
/* _ Main button */
width: 136px;
height: 48px;
/* Auto layout */
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
margin-top: auto;

border-radius: 12px;
background: var(--button-color);


color: rgb(255, 255, 255);
font-size: 14px;
font-weight: 600;
line-height: 20px;


&:hover{
	background: var(--button-color-hover);
}
`

