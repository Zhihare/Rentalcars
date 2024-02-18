import React from 'react'
import { Container } from './HomePage.styled'
import TitleHomePage from '../components/Title/TitleHomePage'
import KeyFuture from '../components/KeyFuture/KeyFuture'
import GettingSturted from '../components/KeyFuture/GettingSturted'



const HomePage = () => {
	return (
		<Container>
			<TitleHomePage />
			<KeyFuture />
			<GettingSturted />
		</Container>
	)
}

export default HomePage
