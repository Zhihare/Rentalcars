import React from "react";
import { useSelector } from "react-redux";
import { WrapperCatalog } from "../CatalogCars/CatalogCars.styled";
import ItemCar from "../ItemCar/ItemCar";
import { selectFavorites, selectFilterFavorites } from "../../redax/catalogSelector";
import { TitleInfo } from "./FavoriteCatalog.styled";
import icons from "../../img/icon.svg"

const FavoriteCatalog = () => {

	const favorites = useSelector(selectFavorites);
	const filter = useSelector(selectFilterFavorites);

	const carsArray = filter === null ? favorites : filter;


	return (
		<>
			{favorites.length === 0 || carsArray.length === 0 ?
				<TitleInfo>You haven't selected anything yet.<br />
					Click on the
					<svg
						width="18"
						height="18"
						className='active'
					>
						<use href={icons + '#icon-favorite'}></use>
					</svg>to choose the car you like.
				</TitleInfo> :

				<WrapperCatalog>
					{carsArray.map(e => (
						<ItemCar key={e.id} car={e} />))
					}
				</WrapperCatalog>
			}
		</>
	)
}

export default FavoriteCatalog