'use strict';

import getUFByDate from '../functions/getUFByDate';
import isValidDate from '../model/joi';

module.exports.UFCLP = async (event, context, callback) => {
	context.callbackWaitsForEmptyEventLoop = false;

	try {
		const { error } = isValidDate.validate(JSON.parse(event.body));

		if (!error) {
			const { fecha, valor_uf } = JSON.parse(event.body);
			const clp = await getUFByDate(fecha, valor_uf);

			callback(null, {
				statusCode: 200,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					success: true,
					clp,
				}),
			});
		} else {
			callback(null, {
				statusCode: 404,
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					success: false,
					message: `invalid data entered.`,
					details: error.details,
				}),
			});
		}
	} catch (e) {
		callback(null, {
			statusCode: 404,
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				success: false,
				message: e,
			}),
		});
	}
};
