import React from 'react'
import FavoriteCatalog from '../components/FavoriteCatalog/FavoriteCatalog'
import FilterCarsForm from '../components/Filter/Filter'
import { useSelector } from 'react-redux'
import { selectFavorites } from '../redax/catalogSelector'
import { setFilterFavorites } from '../redax/catalogSlice'
import { Margin } from './CatalogPage.styled'

const FavoritePage = () => {
	const favorites = useSelector(selectFavorites);


	return (
		<div>
			<FilterCarsForm cars={favorites} setFilter={setFilterFavorites}></FilterCarsForm>
			<FavoriteCatalog />
			<Margin />
		</div>
	)
}

export default FavoritePage