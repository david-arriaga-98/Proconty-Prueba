import axios from 'axios';
import { ICharacter } from '../models/characterModel';

const url = 'https://localhost:7012/';

const Axios = axios.create({
	baseURL: url
});

export const getCharacters = async () => {
	const da = await Axios.get('/Character');
	return da.data;
};

export const getDBCharacters = async () => {
	try {
		const da = await Axios.get('/DBCharacter');
		return da.data;
	} catch (error) {
		throw new Error('Error');
	}
};

export const saveCharacters = async (data: any) => {
	try {
		return await Axios.post('/Character', data);
	} catch (error) {
		throw new Error('Error al intentar guardar');
	}
};

export default {};
