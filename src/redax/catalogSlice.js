import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCatalogCars } from './catalogThank';

const initialState = {
	cars: [],
	isLoading: false,
	error: null,
};

const catalogSlice = createSlice({
	name: 'catalog',
	initialState,
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
export const catalogReducer = catalogSlice.reducer;