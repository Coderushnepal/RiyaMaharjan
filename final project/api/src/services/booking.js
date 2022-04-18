import Booking from "../models/Booking.js";
import logger from "../utils/logger.js";

/**
 * Get list of bookings
 *
 * @returns {Object}
 *
 */
export async function getAllBookings(query) {
  logger.info("Fetching Bookings");
  console.log(query);

  const data = await new Booking().getAllBookings();

  return {
    data,
    message: "List of Booking",
  };
}

/**
 * post bookings
 *
 * @returns {Object}
 *
 */
export async function addBooking(params) {
  logger.info("Posting Booking");
  logger.info(`Payload Recieved ${params}`);

  const data = await new Booking().save(params);

  return {
    data,
    message: "Record added Successfully",
  };
}
