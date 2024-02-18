import React from 'react'
import { TitleText, Title, TextDefoult } from './Title.styled'

const TitleHomePage = () => {
	return (
		<Title>
			<div>
				<h2>Welcome to Rental<span>Cars</span></h2>
				<TitleText>your personal guide to the world of car rentals</TitleText>
				<TextDefoult>Our app offers a wide selection of cars for every taste and budget, making your journey even more convenient and comfortable.</TextDefoult>
				<TextDefoult>Don't miss the opportunity to make your trips even more memorable with the RentalCars App.</TextDefoult>
				<TextDefoult>Download the app now and embark on your travels with confidence and comfort!</TextDefoult>
			</div>
			<div className='imgWrapper'><img src={require('../../img/64420.jpg')} alt="car" /></div>
		</Title>
	)
}

export default TitleHomePage