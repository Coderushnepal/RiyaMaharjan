import Car from "../models/Car.js";
import logger from "../utils/logger.js";

export function getAllCars() {
  logger.info("Fetching a list of all cars");

  const cars = new Car().getAll();

  return {
    data: cars,
    message: "List of cars",
  };
}

export function getCar(id) {
  logger.info(`Fetching car with carId ${id}`);

  const car = new Car().getById(id);

  if (!car) {
    logger.info(`Cannot find car with carId ${id}`);

    throw new Error(`Cannot find car with carId ${id}`);
  }

  return {
    data: car,
    message: `Details of carId ${id}`,
  };
}

export function addCar(params) {
  logger.info(`Payload Rescieved ${params}`);

  const existingData = new Car().findByParams(params);

  if (existingData) {
    logger.info(`Data with same payload already exists`);

    throw new Error("Data with same payload already exists");
  }
  logger.info("Saving new car data");
  const data = new Car().save(params);
  return {
    data,
    message: "Record added successfully",
  };
}

export function updateCar(id, params) {
  logger.info(`Checking existance of car with id ${id}`);

  const car = new Car().getById(id);

  if (!car) {
    logger.error(`Cannot find car with id ${id}`);

    throw new Error(`Cannot find car with id ${id}`);
  }

  logger.info(`Updating data of car with id ${id}`);
  new Car().updateById(id, params);

  logger.info(`Fetching updted data of car with id ${id}`);
  const updatedData = new Car().getById(id);

  return {
    data: updatedData,
    message: "Record Updated Successfully",
  };
}

export function removeCar(id) {
  logger.info(`Checking if car with id ${id} exists`);
  const car = new Car().getById(id);

  if (!car) {
    logger.error(`Cannot delete car with id ${id}because it doesn't exist`);

    throw new Error(`Cannot delete car with id ${id}because it doesn't exist`);
  }

  new Car().removeById(id);

  return {
    message: "Record removed successfully",
  };
}
