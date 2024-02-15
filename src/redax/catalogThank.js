import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

axios.defaults.baseURL = "https://65cbc5faefec34d9ed8812c8.mockapi.io";

export const getCatalogCars = createAsyncThunk(
	"contacts/fetchAll",
	async (_, thunkAPI) => {
		try {
			const response = await axios.get("/cars");
			return response.data;
		} catch (e) {
			return thunkAPI.rejectWithValue(e.message);
		}
	}
);