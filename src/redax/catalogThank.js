import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://65cbc5faefec34d9ed8812c8.mockapi.io";

export const getCatalogCars = createAsyncThunk(
	"catalog/fetchAll",
	async (page, thunkAPI) => {
		try {
			const response = await axios.get(`/cars?page=${page}&limit=12`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getCatalogAllCars = createAsyncThunk(
	"catalog/fetchAllCars",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get(`/cars`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);

export const getFilterCars = createAsyncThunk(
	"catalog/make",
	async (make, thunkAPI) => {
		try {
			const response = await axios.get(`cars?make=${make}`);
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
)