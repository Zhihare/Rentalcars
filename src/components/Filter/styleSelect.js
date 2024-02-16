export const customStylesBrand = {
	menu: (provided, state) => ({
		...provided,

	}),

	singleValue: (provided, state) => ({
		...provided,

	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
		transition: 'transform 0.3s ease',
		color: 'rgb(18, 20, 23)',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	control: (provided, state) => ({
		...provided,
		height: 48,
		width: 224,
		border: state.isFocused ? 0 : 0,
		boxShadow: state.isFocused ? 0 : 0,
		'&:hover': {
			border: state.isFocused ? 0 : 0,
		},
		borderRadius: '10px',
		backgroundColor: '#F7F7FB',
		color: '#121417',
		marginTop: '8px',
		fontFamily: 'Manrope',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',

	}),
	placeholder: (provided) => ({
		...provided,
		color: '#121417',
		fontFamily: 'Manrope',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

	input: (provided, state) => ({
		...provided,
		color: '#121417',
		fontFamily: 'Manrope',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

};




export const customStylesPrice = {
	menu: (provided, state) => ({
		...provided,

	}),

	singleValue: (provided, state) => ({
		...provided,

	}),
	dropdownIndicator: (provided, state) => ({
		...provided,
		transform: state.selectProps.menuIsOpen ? 'rotate(180deg)' : null,
		transition: 'transform 0.3s ease',
		color: 'rgb(18, 20, 23)',
	}),
	indicatorSeparator: () => ({
		display: 'none',
	}),
	control: (provided, state) => ({
		...provided,
		height: 48,
		width: 125,
		border: state.isFocused ? 0 : 0,
		boxShadow: state.isFocused ? 0 : 0,
		'&:hover': {
			border: state.isFocused ? 0 : 0,
		},
		borderRadius: '10px',
		backgroundColor: '#F7F7FB',
		color: '#121417',
		marginTop: '8px',
		fontFamily: 'Manrope',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',

	}),
	placeholder: (provided) => ({
		...provided,
		color: '#121417',
		fontFamily: 'Manrope',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

	input: (provided, state) => ({
		...provided,
		color: '#121417',
		fontFamily: 'Manrope',
		fontSize: '18px',
		fontWeight: '500',
		lineHeight: '20px',
	}),

};