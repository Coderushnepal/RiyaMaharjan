import HttpStatusCodes from 'http-status-codes';
import Joi from 'joi';

export default function (err, req, res, next) {
  const error = buildError(err);

  res.status(error.code).json(error);
}

function buildError(err) {
  if (Joi.isError(err)) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
      message: 'Validation Error',
      details: err.details.map((e) => e.message),
    };
  }

  if (err.isBoom) {
    return {
      code: err.output.statusCode,
      message: err.output.payload.message,
    };
  }

  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    message: HttpStatusCodes.getStatusText(
      HttpStatusCodes.INTERNAL_SERVER_ERROR
    ),
    details: err.message || '',
  };
}
