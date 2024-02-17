import styled from 'styled-components';

export const Overlay = styled.div`
	 position: fixed;
   width:100%;
   height: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: rgba(18, 20, 23, 0.5); 
  &::-webkit-scrollbar { width: 0; };

`

export const ModalWindow = styled.div`
margin-top: 20px;
margin-bottom: 20px;
 position: relative;
  max-width: 541px;
  padding:40px;
  z-index:30;
 

  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  border-radius: 24px;
  background: rgb(255, 255, 255);

  p.description{
	margin-top: 14px;
	font-size: 14px;
  }
 
button.close {
    position: absolute;
    right: 22px;
    top: 22px;

    display: flex;
    background: none;
    border: none;
    margin-left: auto;
    margin-bottom: 12px;
    &:is(:hover, :focus) svg {
      stroke: var(--button-color-hover);
    }
  }
  svg {
    fill: none;
    stroke: #292929;
  }
`

export const ModalImg = styled.img`
max-width: 461px;
height: 248px;
object-fit: cover;
border-radius: 14px;

background: rgb(243, 243, 242);
margin-bottom: 14px;

`


export const ModalTitle = styled.h1`
width: 100%;
margin-top: 24px;
font-size: 14px;
font-weight: 500;

`

export const Conditions = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 8px;
gap: 8px;
p{
	color:#363535;
	font-family: Manrope;
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	letter-spacing: -2%;
	padding: 7px 14px 7px 14px;

	border-radius: 35px;
	background: #F9F9F9;
}

span{
	color: #3470FF;
font-weight: 600;
line-height: 18px;
letter-spacing: -2%;
text-align: left;
}

`

export const ButtonModal = styled.button`
width: 168px;
height: 44px;
padding: 12px 0;
margin-top: 24px;


border-radius: 12px;
background: #3470FF;

font-size: 14px;
font-weight: 600;
line-height: 20px;
color: #FFFFFF;

&:hover{
	background: var(--button-color-hover);
}
`