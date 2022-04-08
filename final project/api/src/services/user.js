import Boom from '@hapi/boom';

import User from '../models/User.js';
import logger from '../utils/logger.js';
import { hash, compare, createToken } from '../utils/crypt.js';

/**
 * Create new user
 *
 * @param {Object} params
 * @return {Object}
 */
export async function createUser(params) {
  const { name, email, password } = params;

  const existingUser = await new User().findByParams({ email });

  if (existingUser) {
    logger.error('The email address is alredy in use');

    throw new Boom.badRequest('The email address is already taken');
  }

  const hashedPassword = hash(password);

  const [insertedData] = await new User().save({
    name,
    email,
    password: hashedPassword,
  });

  return {
    data: insertedData,
    message: 'Added user successfully',
  };
}

/**
 * Login Validation and token generations
 *
 * @param {Object} params
 * @return {Object}
 */
export async function login(params) {
  const { email, password } = params;

  const existingUser = await new User().findByParams({ email });

  if (!existingUser) {
    logger.error('Invalid Credentials : Counld not find the associated email');

    throw new Boom.badRequest('Invalid Credentials');
  }

  const doesPasswordMatch = compare(password, existingUser.password);

  if (!doesPasswordMatch) {
    logger.error('Invalid Credentials : Password does not match');

    throw new Boom.badRequest('Invalid Credentials ');
  }

  const user = {
    id: existingUser.id,
    name: existingUser.name,
    email: existingUser.email,
  };

  const token = createToken({ user });

  return {
    data: { token, user },
    message: 'Logged In successfully',
  };
}
