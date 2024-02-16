
import MyForm from '../components/Filter/Filter';
import React, { useEffect } from 'react';
import { getCatalogCars } from '../redax/catalogThank';
import { useDispatch } from 'react-redux';
import CatalogCars from '../components/CatalogCars/CatalogCars';


const CatalogPage = () => {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCatalogCars());
	}, [dispatch]);




	return (
		<>
			<MyForm></MyForm>
			<CatalogCars></CatalogCars>
		</>
	)
}

export default CatalogPage