import DBModel from "./DBModel.js";
import getBookingsQuery from "../db/queries/getBookings.js";

/**
 * Model for destination image table
 *
 * @class Bookings
 */
class Bookings extends DBModel {
  constructor() {
    super("bookings");
  }

  getAllBookings() {
    return this.query(getBookingsQuery);
  }
}

export default Bookings;
