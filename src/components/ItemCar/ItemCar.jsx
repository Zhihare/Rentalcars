import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalDataSelector, modalSelector, selectFavorites } from "../../redax/catalogSelector";
import defaultimg from "../../img/default_car.jpg";
import { ButtonItem, FavoriteButton, ImgCatalog, OptionsItem, TitleContainer, WrapperItem } from "./ItemCar.styled";
import { addFavorites, removeFavorites, setModal, setModalData } from "../../redax/catalogSlice";
import { ModalWind } from "../Modal/Modal";
import icons from "../../img/icon.svg"

const ItemCar = ({ car }) => {

	const dispatch = useDispatch();
	const modal = useSelector(modalSelector);
	const modalData = useSelector(modalDataSelector);
	const favorites = useSelector(selectFavorites);
	const [actionFavorite, setActionFavorite] = useState(false);


	const onOpenModal = (modalData) => {
		dispatch(setModal(true));
		dispatch(setModalData(modalData));
	}



	const { id, img, address, rentalCompany, rentalPrice, type, model, year, make, accessories } = car;
	const city = address.split(',');
	const modellength = model.length;

	useEffect(() => {
		if (favorites !== null) {
			const carIsFavorite = favorites.some(e => e.id === id);

			setActionFavorite(carIsFavorite);
		}
	}, [favorites, id]);


	const togleFavorite = () => {
		if (!actionFavorite) {
			dispatch(addFavorites(car));
			setActionFavorite(true);
		} else {
			dispatch(removeFavorites(id));
			setActionFavorite(false);
		}
	};


	return (

		<>
			<WrapperItem>
				<FavoriteButton
					type="button"
					onClick={togleFavorite}
				>
					<svg
						width="18"
						height="18"
						className={actionFavorite ? 'active' : 'defould'}
					>
						<use href={icons + '#icon-favorite'}></use>
					</svg>
				</FavoriteButton>
				{!img ?
					<ImgCatalog src={defaultimg} alt={make} /> :
					<ImgCatalog src={img} alt={make} />}
				<TitleContainer>
					{modellength < 8 ?
						<h2>{make} <span>{model}</span>, {year}</h2> :
						<h2>{make}, {year}</h2>
					}

					<p>{rentalPrice}</p>
				</TitleContainer>
				<OptionsItem>
					<span>{city[1]}</span><span>{city[2]}</span><span>{rentalCompany}</span>
				</OptionsItem>
				<OptionsItem style={{
					height: '20px',
					overflow: 'hidden'
				}}>
					<span>{type}</span><span>{make}</span> <span>{id}</span><span>{accessories[0]}</span></OptionsItem>
				<ButtonItem onClick={() => onOpenModal(car)}>Learn more</ButtonItem>
			</WrapperItem>
			{modal && <ModalWind key={id} car={modalData} />}
		</>

	)
}

export default ItemCar