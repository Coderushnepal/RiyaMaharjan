import axios from "axios";
import config from "../config";
import {interpolate, unParseQuery} from "../utils/string";


export const getUser = async () => { 
    const url = `${config.apiUrl}${config.endpoints.users}`;
    console.log('url', url);
    const { data } = await axios.get(url); 
    // console.log(data);  
    return data;
};

export const getUsersById = async (email) => {
    const url = `${config.apiUrl}${config.endpoints.users}`;
  
    const { data } = await axios.get(interpolate(url, { email }))
  
    console.log(data.data)
    return data.data;
  }
  