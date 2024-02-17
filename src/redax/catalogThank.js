import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://65cbc5faefec34d9ed8812c8.mockapi.io";

export const getCatalogCars = createAsyncThunk(
	"contacts/fetchAll",
	async (page, thunkAPI) => {
		try {
			const response = await axios.get(`/cars?page=${page}&limit=12`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

// export const getCatalogFilter = createAsyncThunk(
// 	"contacts/fetchAll",
// 	async (page, thunkAPI) => {
// 		try {
// 			const response = await axios.get(`/cars`);
// 			return response.data;
// 		} catch (e) {
// 			return thunkAPI.rejectWithValue(e.message);
// 		}
// 	}
// );