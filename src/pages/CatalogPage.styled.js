import styled from 'styled-components'


export const LoadMoreButton = styled.button`
margin: 100px auto;

border: none;
background: none;


color: var(--button-color);
font-size: 16px;
font-weight: 500;
line-height: 24px;
text-decoration-line: underline;


&:hover{
	color: var(--button-color-hover);
}

&.hidden{
	display: none;
}
`

export const Margin = styled.p`
margin-bottom: 70px;
`