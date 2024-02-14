import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px;
	margin-bottom: 70px;

	@media(min-width: 600px){
	margin: 20px 8px;
}

`
export const TextHomePage = styled.p`
color: var(--text-color-grey);
margin: 0;
padding: 0;
`