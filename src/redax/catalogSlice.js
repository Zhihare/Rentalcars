import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCatalogAllCars, getCatalogCars, getFilterCars } from './catalogThank';

const initialState = {
	cars: [],

	isLoading: true,
	error: null,

	allcars: [],

	filterFavorites: null,
	filter: null,
	favorites: [],
	loadpage: 2,

	modal: false,
	modalData: null,


};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,

	reducers: {
		setCars(state, action) {
			state.cars = action.payload;
		},

		addFavorites(state, action) {
			state.favorites.push(action.payload);
		},
		removeFavorites(state, action) {
			state.favorites = state.favorites.filter(
				car => car.id !== action.payload
			);
		},

		setFavorites(state, action) {
			state.favorites = action.payload;
		},

		setLoadpage(state, action) {
			state.loadpage = action.payload;
		},

		setFilter(state, action) {
			state.filter = action.payload;
		},

		setIsLoading(state, action) {
			state.isLoading = action.payload;
		},

		setFilterFavorites(state, action) {
			state.filterFavorites = action.payload;
		},

		setModal(state, action) {
			state.modal = action.payload;
		},

		setModalData(state, action) {
			state.modalData = action.payload;
		},
	},

	extraReducers: builder => {
		builder
			.addCase(getCatalogCars.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.cars = state.cars.concat(action.payload);
			})

			.addCase(getCatalogAllCars.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.allcars = action.payload;
			})

			.addCase(getFilterCars.fulfilled, (state, action) => {
				state.isLoading = false;
				state.error = null;
				state.filter = action.payload;
			})

			.addMatcher(
				isAnyOf(
					getCatalogCars.pending,
					getCatalogAllCars.pending,
					getFilterCars.pending,
				), state => {
					state.isLoading = true;
				})
			.addMatcher(
				isAnyOf(
					getCatalogCars.rejected,
					getCatalogAllCars.rejected,
					getFilterCars.rejected,
				), (state, action) => {
					state.isLoading = false;
					state.error = action.payload;
				});
	},
});

export const catalogReducer = catalogSlice.reducer;
export const { addFavorites, setIsLoading, removeFavorites, setFilterFavorites, setFilter, setModal, setModalData, setLoadpage, setCars, setFavorites } = catalogSlice.actions;