import React from 'react'
import { NavigationNav } from './Navigation.styled'
import { NavLink } from 'react-router-dom'

const Navigator = () => {
	return (
		<NavigationNav>
			<NavLink activeclassname="active" to="/">
				Home
			</NavLink>
			<NavLink activeclassname="active" to="/catalog">
				Catalog
			</NavLink>
			<NavLink activeclassname="active" to="/favorites">
				Favorites
			</NavLink>
		</NavigationNav>
	)
}

export default Navigator