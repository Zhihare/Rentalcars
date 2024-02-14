import React from 'react'
import { HeaderSection, LogoConteiner, Navigation } from './Header.styled'
import Navigator from '../Navigation/Navigation'


const Header = () => {
	return (
		<HeaderSection>
			<LogoConteiner><p>Rental<span>Cars</span></p></LogoConteiner>
			<Navigation>
				<Navigator></Navigator>
			</Navigation>
		</HeaderSection>
	)
}

export default Header