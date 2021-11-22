import axios from 'axios';

import { ComingSoon, Top250Movies } from './types';

const moviesApi = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
});

export const top250Movies = async () => {
  try {
    const res = await moviesApi.get<Top250Movies>(`Top250Movies/${process.env.REACT_APP_API_KEY}`);
    if (res.data.errorMessage) {
      throw new Error(res.data.errorMessage);
    } else {
      return res.data.items;
    }
  } catch (e) {
    console.warn(e);
    return false;
  }
};

export const comingSoon = async () => {
  try {
    const res = await moviesApi.get<ComingSoon>(`ComingSoon/${process.env.REACT_APP_API_KEY}`);
    if (res.data.errorMessage) {
      throw new Error(res.data.errorMessage);
    } else {
      return res.data.items;
    }
  } catch (e) {
    console.warn(e);
    return false;
  }
};
