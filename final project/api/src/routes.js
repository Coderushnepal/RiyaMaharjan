import { Router } from 'express';
import * as destinationController from './controllers/destination.js';
import * as apiController from './controllers/api.js';
import * as userController from './controllers/user.js';
import { validateBody, validateQueryParams } from './middlewares/validation.js';
import * as destinationImageController from './controllers/destinationImages.js';
import addDestinationSchema from './schemas/addDestination.js';
import updateDestinationSchema from './schemas/updateDestination.js';
import addUserSchema from './schemas/addUser.js';
import getDestinationsQuerySchema from './schemas/getDestinationQuery.js';
import connection from './knexfile.js';

const router = Router();

router.get('/', apiController.getAPIDetails);

// get all
router.get(
  '/destinations',
  validateQueryParams(getDestinationsQuerySchema),
  destinationController.getDestinations
);

router.get('/abcd', async (req, res, next) => {
  const data = await connection('destination').select('*');

  res.json(data);
});

router.get('/images', destinationImageController.getDestinationImages);

// get specific
router.get(
  '/destinations/:destinationIdentifier',
  destinationController.getDestination
);

// post
router.post(
  '/destinations',
  validateBody(addDestinationSchema),
  destinationController.saveDestination
);

// put
router.put(
  '/destinations/:destinationIdentifier',
  validateBody(updateDestinationSchema),
  destinationController.updateDestination
);

// delete
router.delete(
  '/destinations/:destinationIdentifier',
  destinationController.removeDestination
);

router.post('/users', validateBody(addUserSchema), userController.addUser);

export default router;
