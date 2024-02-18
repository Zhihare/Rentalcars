import React, { useEffect } from 'react';
import { getCatalogCars } from '../redax/catalogThank';
import { useDispatch, useSelector } from 'react-redux';
import CatalogCars from '../components/CatalogCars/CatalogCars';
import { catalogSelector, selectFilter, selectIsLoading, selectLoadPage } from '../redax/catalogSelector';
import { setFilter, setIsLoading, setLoadpage } from '../redax/catalogSlice';
import { LoadMoreButton, Margin } from './CatalogPage.styled';
import FilterCarsForm from '../components/Filter/Filter';
import Loader from '../components/Loader/Loader';


const CatalogPage = () => {

	const dispatch = useDispatch();
	const loadMorePage = useSelector(selectLoadPage);
	const catalogCars = useSelector(catalogSelector);
	const filter = useSelector(selectFilter);
	const loader = useSelector(selectIsLoading)

	useEffect(() => {
		if (catalogCars.length === 0) {
			dispatch(setIsLoading(true));
			dispatch(getCatalogCars(1));
		}
	}, [dispatch, catalogCars]);


	const loadMore = () => {
		dispatch(setIsLoading(true));
		dispatch(setLoadpage(loadMorePage + 1));
		dispatch(getCatalogCars(loadMorePage));


	};


	return (
		<>
			<FilterCarsForm cars={catalogCars} setFilter={setFilter}></FilterCarsForm>

			<CatalogCars></CatalogCars>
			{loader ? <Loader /> : null}
			{(catalogCars.length % 12 === 0) && (filter === null) ?
				<LoadMoreButton onClick={loadMore} >Load more</LoadMoreButton> :
				<Margin />}
		</>
	)
}

export default CatalogPage