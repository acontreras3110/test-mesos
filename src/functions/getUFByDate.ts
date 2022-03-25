const axios = require('axios');

export default async (fecha: string, valor_uf: number): Promise<number> => {
	let config = {
		method: 'get',
		url: `https://mindicador.cl/api/uf/${fecha}`,
		headers: {},
	};

	async function axiosTest() {
		const response = await axios(config);
		return response.data;
	}

	const { serie } = await axiosTest();

	return Math.round(valor_uf * serie[0].valor);
};
