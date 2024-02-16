import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { catalogSelector, modalDataSelector, modalSelector, selectFilter } from "../../redax/catalogSelector";
import defaultimg from "../../img/default_car.jpg";
import { ButtonItem, FavoriteButton, ImgCatalog, OptionsItem, TitleContainer, WrapperCatalog, WrapperItem } from "./CatalogCars.styled";
import { setModal, setModalData } from "../../redax/catalogSlice";
import { ModalWind } from "../Modal/Modal";
import icons from "../../img/icon.svg"

const CatalogCars = () => {

	const cars = useSelector(catalogSelector);
	const filter = useSelector(selectFilter);
	const modal = useSelector(modalSelector);
	const modalData = useSelector(modalDataSelector)

	const carsArray = filter === null ? cars : filter;
	const dispatch = useDispatch();

	const onOpenModal = (modalData) => {
		dispatch(setModal(true));
		dispatch(setModalData(modalData));
	}








	return (


		<WrapperCatalog>
			{carsArray.map((car) => {
				const { id, img, address, rentalCompany, rentalPrice, type, model, year, make, accessories } = car;
				const city = address.split(',');
				const modellength = model.length;


				return (
					<WrapperItem key={id}>
						<FavoriteButton
							type="button"
						// onClick={handleToggleFavorite}
						>
							<svg
								width="18"
								height="18"
							// className={isFavorite ? item.active : 'heart'}
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
						<OptionsItem>
							<span>{type}</span><span>{make}</span> <span>{id}</span><span>{accessories[0]}</span></OptionsItem>
						<ButtonItem onClick={() => onOpenModal(car)}>Learn more</ButtonItem>
					</WrapperItem>
				)
			})
			}
			{modal && <ModalWind car={modalData} />}
		</WrapperCatalog>

	)
}

export default CatalogCars