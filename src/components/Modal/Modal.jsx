import React, { useEffect } from 'react'
import { Overlay, ModalWindow, ModalTitle, ModalImg, Conditions, ButtonModal } from './Modal.styled'
import { useDispatch, useSelector } from 'react-redux';
import { setModal, setModalData } from '../../redax/catalogSlice';
import { modalDataSelector } from '../../redax/catalogSelector';
import { OptionsItem, TitleContainer } from '../CatalogCars/CatalogCars.styled';
import icons from '../../img/icon.svg'
import defaultimg from '../../img/default_car.jpg'
export const ModalWind = (carinfo) => {

	const modalData = useSelector(modalDataSelector);
	const dispatch = useDispatch();
	console.log(modalData);

	const onCloseModal = () => {
		dispatch(setModal(false));
		dispatch(setModalData(null));
	}

	const onKeyDown = event => {
		if (event.code === 'Escape') {
			onCloseModal();
		}
	};

	const onOverlayClick = event => {
		if (event.currentTarget === event.target) {
			onCloseModal();
		}
	};

	useEffect(() => {
		window.addEventListener('keydown', onKeyDown);
		return () => {
			window.removeEventListener('keydown', onKeyDown);
		}
	});
	const city = modalData.address.split(',');
	const conditions = modalData.rentalConditions.split("\n");
	console.log(conditions);
	return (


		<Overlay onClick={onOverlayClick}>
			<ModalWindow>
				<button className='close' onClick={() => onCloseModal()}>
					<svg width="24" height="24">
						<use href={icons + '#icon-close-setting'}></use>
					</svg>
				</button>
				{!modalData.img ?
					<ModalImg src={defaultimg} alt={modalData.make} /> :
					<ModalImg src={modalData.img} alt={modalData.make} />}
				<TitleContainer style={{ fontSize: '18px' }}>
					<h2>{modalData.make} <span>{modalData.model}</span>, {modalData.year}</h2>
				</TitleContainer>
				<OptionsItem>
					<span>{city[1]}</span><span>{city[2]}</span><span>{modalData.id}</span><span>{modalData.year}</span><span>{modalData.type}</span>
				</OptionsItem>
				<OptionsItem>
					<span>Fuel Consumption: {modalData.fuelConsumption}</span><span>Engine Size: {modalData.engineSize}</span>
				</OptionsItem>
				<p className='description'>{modalData.description}</p>
				<ModalTitle>Accessories and functionalities:</ModalTitle>
				<OptionsItem>
					{modalData.accessories.map((item) => {
						return <span>{item}</span>
					})
					}
				</OptionsItem>
				<OptionsItem>
					{modalData.functionalities.map((item) => {
						return <span>{item}</span>
					})
					}
				</OptionsItem>
				<ModalTitle>Rental Conditions: </ModalTitle>
				<Conditions>
					{conditions.map((item) => {
						return <p>{item}</p>
					})
					}
					<p>mileage: <span>{modalData.mileage}</span></p>
					<p>price: <span>{modalData.rentalPrice}</span></p>
				</Conditions>


				<ButtonModal type="submit"
					onClick={() => onCloseModal()}>Rental car</ButtonModal>
			</ModalWindow>
		</Overlay>
	)
}