import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCatalogCars } from './catalogThank';

const initialState = {
	cars: [],
	isLoading: false,
	error: null,
	filter: null,
	modal: false,
	modalData: null,
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,

	reducers: {
		setFilter(state, action) {
			state.filter = action.payload;
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
				state.cars = action.payload;
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
export const { setFilter, setModal, setModalData } = catalogSlice.actions;
export const catalogReducer = catalogSlice.reducer;