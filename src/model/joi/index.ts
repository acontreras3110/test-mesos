const Joi = require('joi').extend(require('@joi/date'));

export default Joi.object().keys({
	fecha: Joi.date().format('DD-MM-YYYY').raw().required(),
	valor_uf: Joi.number().required(),
});
