import * as userService from '../services/user.js'; // only for named Export

/**
 * Controller to add a new user
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function addUser(req, res, next) {
  userService
    .createUser(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller for user login
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function login(req, res, next) {
  userService
    .login(req.body)
    .then((data) => res.json(data))
    .catch((err) => next(err));
}

/**
 * Controller to get details of all users
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
 export function getUsers(req, res, next) {
  userService
    .getUsers()
    .then((data) => res.json(data))
    .catch((err) => next(err));
}
