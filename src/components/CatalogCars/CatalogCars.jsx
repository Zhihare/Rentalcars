import React from "react";
import { useSelector } from "react-redux";
import { catalogSelector, selectFilter } from "../../redax/catalogSelector";

import { WrapperCatalog } from "./CatalogCars.styled";

import ItemCar from "../ItemCar/ItemCar";
import { TitleInfo } from "../FavoriteCatalog/FavoriteCatalog.styled";


const CatalogCars = () => {


	const cars = useSelector(catalogSelector);
	const filter = useSelector(selectFilter);


	const carsArray = filter === null ? cars : filter;

	return (
		<>
			{carsArray.length !== 0 ?
				<WrapperCatalog>
					{carsArray.map(e => (
						<ItemCar key={e.id} car={e} />
					))}
				</WrapperCatalog> :
				<TitleInfo>This criteria did not yield any results.</TitleInfo>
			}

		</>

	)
}

export default CatalogCars