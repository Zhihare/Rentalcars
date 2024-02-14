import React from 'react'
import { HeaderSection, Logo, Navigation } from './Header.styled'
import Navigator from '../Navigation/Navigation'

const Header = () => {
	return (
		<HeaderSection>
			<Logo><p>Rental<span>Cars</span></p></Logo>
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
		</HeaderSection>
	)
}

export default Header