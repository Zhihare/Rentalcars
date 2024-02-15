import React, { useState } from 'react';
import Select from 'react-select';
import { FilterForm, FilterFormButton, FilterFormInput } from './Filter.styled';

const MyForm = () => {
	const [selectedOption1, setSelectedOption1] = useState('');
	const [selectedOption2, setSelectedOption2] = useState('');
	const [input1, setInput1] = useState('');
	const [input2, setInput2] = useState('');

	const options1 = [
		{ value: 'Option 1', label: 'Option 1' },
		{ value: 'Option 2', label: 'Option 2' },
		{ value: 'Option 3', label: 'Option 3' },
	];

	const options2 = [
		{ value: 'Choice A', label: 'Choice A' },
		{ value: 'Choice B', label: 'Choice B' },
		{ value: 'Choice C', label: 'Choice C' },
	];

	const customStylesBrand = {
		control: (provided) => ({
			...provided,
			height: 48,
			width: 224,
			border: 'none',
			borderRadius: '10px',
			backgroundColor: '#F7F7FB',
			color: 'black',
			marginTop: '8px',

		}),
		placeholder: (provided) => ({
			...provided,
			color: '#121417',
			fontFamily: 'Manrope',
			fontSize: '18px',
			fontWeight: '500',
			lineHeight: '20px',
		})
	};

	const customStylesPrice = {
		control: (provided) => ({
			...provided,
			height: 48,
			width: 125,
			border: 'none',
			borderRadius: '10px',
			backgroundColor: '#F7F7FB',
			color: 'black',
			marginTop: '8px',
		}),

		placeholder: (provided) => ({
			...provided,
			color: '#121417',
			fontFamily: 'Manrope',
			fontSize: '18px',
			fontWeight: '500',
			lineHeight: '20px',
		})
	};


	const handleCustomInputChange = (e, setInput) => {
		setInput(e.target.value);

	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('Form submitted:', { selectedOption1, selectedOption2, input1, input2 });
	};

	return (
		<div>
			<FilterForm onSubmit={handleSubmit}>
				<label>
					Car brand:
					<Select
						options={options1}
						type="text"
						isSearchable
						isClearable
						placeholder="Enter the text..."
						styles={customStylesBrand}
						onChange={(selectedOption1) =>
							setSelectedOption1(selectedOption1 ? selectedOption1.value : '')}
					/>
				</label>
				<label>
					Price/1hour
					<Select
						options={options2}
						type='number'
						isSearchable
						isClearable
						placeholder="To$"
						styles={customStylesPrice}
						onChange={(selectedOption2) =>
							setSelectedOption2(selectedOption2 ? selectedOption2.value : '')}
					/>

				</label>
				<label>
					Сar mileage / km
					<FilterFormInput>
						<input
							type="number"
							value={input1}
							placeholder='From'
							onChange={(e) => handleCustomInputChange(e, setInput1)}
						/>
						<input
							type="number"
							value={input2}
							placeholder='To'
							onChange={(e) => handleCustomInputChange(e, setInput2)}
						/>
					</FilterFormInput>
				</label>
				<FilterFormButton type="submit">Search</FilterFormButton>
			</FilterForm>
		</div>
	);
};

export default MyForm;
