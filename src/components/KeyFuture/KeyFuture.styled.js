import styled from "styled-components";

export const ContainerKey = styled.div`
	box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
	padding: 15px;
	max-width: 530px;

	span{
		color: var(--text-color-active);
	}

	h3{
		margin-bottom: 15px;
	}

	ul{
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	li{
		display: flex;
		gap: 5px;
		justify-content: center;
		    align-items: center;
	}

	span{
		
		min-width: 5px;
		min-height: 5px;
		margin: auto 5px;
    background: var(--text-color-active);
  border-radius: 50%;
	}

	p{
		line-height: 1.4;
		
	}
`

export const TitleKey = styled.h3`

`