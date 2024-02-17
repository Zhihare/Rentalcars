import React, { useEffect } from 'react';
import { getCatalogCars } from '../redax/catalogThank';
import { useDispatch, useSelector } from 'react-redux';
import CatalogCars from '../components/CatalogCars/CatalogCars';
import { catalogSelector, selectFilter, selectLoadPage } from '../redax/catalogSelector';
import { setFilter, setLoadpage } from '../redax/catalogSlice';
import { LoadMoreButton, Margin } from './CatalogPage.styled';
import FilterCarsForm from '../components/Filter/Filter';


const CatalogPage = () => {

	const dispatch = useDispatch();
	const loadMorePage = useSelector(selectLoadPage);
	const catalogCars = useSelector(catalogSelector);
	const filter = useSelector(selectFilter);


	useEffect(() => {
		if (catalogCars.length === 0) {
			dispatch(getCatalogCars(1));
		}
	}, [dispatch, catalogCars]);


	const loadMore = () => {
		dispatch(setLoadpage(loadMorePage + 1));
		dispatch(getCatalogCars(loadMorePage));

	};


	return (
		<>
			<FilterCarsForm cars={catalogCars} setFilter={setFilter}></FilterCarsForm>
			<CatalogCars></CatalogCars>

			{(catalogCars.length % 12 === 0) && (filter === null) ?
				<LoadMoreButton onClick={loadMore} >Load more</LoadMoreButton> :
				<Margin />}
		</>
	)
}

export default CatalogPage