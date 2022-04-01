import DBModel from './DBModel.js';

/**
 * Model for users table
 *
 * @class User
 */
class User extends DBModel {
  constructor() {
    super('users');
  }
}

export default User;
