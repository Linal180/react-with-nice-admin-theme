import axios from 'axios';

import { API_URL } from '../constants';
import { getApiCallHeaders } from '../utils'

const instance = axios.create({
  baseURL: API_URL,
  headers: getApiCallHeaders()
});

export const apiGet = async (url, params = {}) => {
  try {
    const response = await instance.get(url, { params });
    return response;
  } catch (error) {
    return null
  }
};

export const apiPost = async (url, data = {}) => {
  try {
    const response = await instance.post(url, data);
    return response.data;
  } catch (error) {
    return null
  }
};

export const apiPut = async (url, data = {}) => {
  try {
    const response = await instance.put(url, data);
    return response;
  } catch (error) {
    return null
  }
};
