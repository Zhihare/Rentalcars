import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://65cbc5faefec34d9ed8812c8.mockapi.io',
});



export const fetchCatalog = async () => {
	const { data } = await instance.get(`/cars`);
	return data;
};


