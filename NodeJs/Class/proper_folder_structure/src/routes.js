import { Router } from "express";
import * as carController from "./controllers/car.js";

const router = Router();

router.get("/", (req, res, next) => {
  res.send("This is the response from the index(/) route");
});

//get all
router.get("/cars", carController.getCars);

//get specific
router.get("/cars/:carIdentifier", carController.getCar);

//post
router.post("/cars", carController.saveCar);

//put
router.put("/cars/:carIdentifier", carController.updateCar);

//delete
router.delete("/cars/:carIdentifier", carController.removeCar);

export default router;
