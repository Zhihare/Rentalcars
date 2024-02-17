import React from "react";
import { useSelector } from "react-redux";
import { catalogSelector, selectFilter } from "../../redax/catalogSelector";

import { WrapperCatalog } from "./CatalogCars.styled";

import ItemCar from "../ItemCar/ItemCar";

const CatalogCars = () => {


	const cars = useSelector(catalogSelector);
	const filter = useSelector(selectFilter);


	const carsArray = filter === null ? cars : filter;


	return (


		<WrapperCatalog>
			{carsArray.map(e => (
				<ItemCar key={e.id} car={e} />
			))}
		</WrapperCatalog>

	)
}

export default CatalogCars