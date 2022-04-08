import DBModel from './DBModel.js';

/**
 * Model for destination image table
 *
 * @class Bookings
 */
class Bookings extends DBModel {
  constructor() {
    super('bookings');
  }
}

export default Bookings;
