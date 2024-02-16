import React, { useState } from 'react';
import Select from 'react-select';
import { FilterForm, FilterFormButton, FilterFormInput, InputContainer, SelectFilter } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { catalogSelector } from '../../redax/catalogSelector';
import { customStylesBrand, customStylesPrice } from './styleSelect';
import { createArrayWithStep, makeUniq } from './optionSelect';
import { setFilter } from '../../redax/catalogSlice';

const MyForm = () => {
	const [carsSelector, setCarsSelector] = useState('');
	const [priceSelector, setPriceSelector] = useState('');
	const [from, setFrom] = useState('');
	const [to, setTo] = useState('');


	const dispatch = useDispatch();

	const cars = useSelector(catalogSelector);

	const unicModal = makeUniq(cars);

	const price = createArrayWithStep();



	const handleCustomInputChange = (e, setInput) => {
		setInput(e.target.value);

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// const PriceRental = priceSelector ? `$${priceSelector}` : '';
		dispatch(setFilter(null));
		const filters = { carsSelector, priceSelector, from, to };
		const result = filterCars(cars, filters);
		dispatch(setFilter(result));
		console.log(filters);
		console.log(result);
	};


	const filterCars = (cars, filters) => {
		return cars.filter(car => {
			const modelMatch = !filters.carsSelector || car.make.toLowerCase().includes(filters.carsSelector.toLowerCase());
			const priceMatch = !filters.priceSelector || car.rentalPrice.substring(1) <= filters.priceSelector;
			const mileageMatch = (!filters.from || car.mileage >= filters.from) &&
				(!filters.to || car.mileage <= filters.to);

			return modelMatch && priceMatch && mileageMatch;
		});
	};



	return (
		<div>
			<FilterForm onSubmit={handleSubmit}>
				<label>
					Car brand:
					<Select
						options={unicModal}
						type="text"
						isSearchable
						isClearable
						placeholder="Enter the text..."
						styles={customStylesBrand}
						onChange={(carsSelector) =>
							setCarsSelector(carsSelector ? carsSelector.value : '')}
					/>
				</label>
				<label>
					Price/1hour
					<SelectFilter
						options={price}
						type='number'
						isSearchable
						isClearable
						placeholder="To$"
						styles={customStylesPrice}
						onChange={(priceSelector) =>
							setPriceSelector(priceSelector ? priceSelector.value : '')}
					/>

				</label>
				<label>
					Сar mileage / km
					<FilterFormInput>
						<InputContainer>
							<input
								type="number"
								value={from}
								onChange={(e) => handleCustomInputChange(e, setFrom)}
							/>
							<span>From</span>
						</InputContainer>
						<InputContainer>
							<input className='two'
								type="number"
								value={to}
								onChange={(e) => handleCustomInputChange(e, setTo)}
							/>
							<span>To</span>
						</InputContainer>
					</FilterFormInput>
				</label>
				<FilterFormButton type="submit">Search</FilterFormButton>
			</FilterForm>
		</div>
	);
};

export default MyForm;
