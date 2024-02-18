import styled from "styled-components";

export const Title = styled.div`
	display: flex;
	flex-wrap: wrap;
    width: 1200px;
    padding: 15px;
    align-items: center;
	justify-content: center;

	span{
		color: var(--text-color-active);
	}

	img{
		@media(max-width: 600px){
			top: 0;
			left: -50px;
			max-width: 350px;
		}
		position: absolute;
		top: 0;
		left: 0;
		display: block;
    max-width: 100%;
    height: auto;
    max-width: 700px;
	}

	div.imgWrapper{
		@media(max-width: 600px){
			width: 300px;
			height: 200px;
		}

		position: relative;
		width: 600px;
		height: 500px;
    	overflow: hidden;
	}
`

export const TextDefoult = styled.p`
		font-size: 16px;
		color: black;
		margin: 0;
		padding-bottom: 10px;
		max-width: 500px;
		line-height: 1.4;
`

export const TitleText = styled.p`
		font-size: 16px;
		color: var(--text-color-grey);
		margin: 0 auto 12px auto;

`