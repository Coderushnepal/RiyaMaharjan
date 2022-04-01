import Joi from 'joi';

const schema = Joi.object({
  locationId: Joi.number().integer(),
  price: Joi.number(),
});

export default schema;
