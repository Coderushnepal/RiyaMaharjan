import config from '../config';
import axios from 'axios';
import { interpolate } from '../utils/string';

export const fetchDestinations = async () => {
  const url = `${config.apiUrl}${config.endpoints.destinations}`;

  const { data } = await axios.get(url);
  return data;
};

export const fetchDestinationsById = async (id) => {
  const url = `${config.apiUrl}${config.endpoints.destination}`;

  const { data } = await axios.get(interpolate(url, { id }))

  console.log(data.data)
  return data.data;
}
