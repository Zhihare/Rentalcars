import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCatalogCars } from './catalogThank';

const initialState = {
	cars: [],
	isLoading: false,
	error: null,

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

			.addMatcher(isAnyOf(getCatalogCars.pending), state => {
				state.isLoading = true;
			})
			.addMatcher(isAnyOf(getCatalogCars.rejected), (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			});
	},
});

export const catalogReducer = catalogSlice.reducer;
export const { addFavorites, removeFavorites, setFilterFavorites, setFilter, setModal, setModalData, setLoadpage, setCars, setFavorites } = catalogSlice.actions;