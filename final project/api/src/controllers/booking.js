import * as bookingService from '../services/booking.js'; // only for named Export

/**
 * Controller to get details of all bookings
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function getallBookings(req, res, next) {
  bookingService
    .getBookings()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to post details of booking
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function postBookings(req, res, next) {
  bookingService
    .addBooking()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}