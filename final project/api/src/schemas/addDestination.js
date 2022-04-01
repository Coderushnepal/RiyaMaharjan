import Joi from 'joi';

const schema = Joi.object({
  // location: Joi.string().max(30).required(),
  destinationName: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().integer().required().min(1000),
  images: Joi.array().items(Joi.string()),
});

export default schema;
