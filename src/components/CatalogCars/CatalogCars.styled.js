import styled from 'styled-components'

export const WrapperCatalog = styled.div`
display:grid;
justify-content: center;
grid-template-columns: 274px;
gap: 50px;
margin-top: 50px;


@media(min-width: 600px){
justify-content: center;
grid-template-columns: repeat(2, 274px);
gap: 50px 29px;
}

@media(min-width: 900px){
justify-content: center;
 grid-template-columns: repeat(3, 274px);
gap: 50px 29px;
}

@media(min-width: 1200px){
justify-content: center;
 grid-template-columns: repeat(4, 274px);
gap: 50px 29px;
}
`

