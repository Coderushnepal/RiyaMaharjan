import Joi from 'joi';

const schema = Joi.object({
  price: Joi.number(),
});

export default schema;
