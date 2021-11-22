import axios from 'axios';

const moviesApi = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
});

export const top250Movies = async () => {
  try {
    const res = await moviesApi.get('/');
    console.warn(res);
  } catch (e) {
    console.warn(e);
  }
};

export const comingSoon = async () => {
  try {
    const res = await moviesApi.get('/');
    console.warn(res);
  } catch (e) {
    console.warn(e);
  }
};
