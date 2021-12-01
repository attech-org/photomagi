import axios from 'axios';

import { ComingSoonItem, MostPopularMovie, Movie, MoviesResponse, SingleMovie } from './types';

const moviesApi = axios.create({
  baseURL: 'https://imdb-api.com/en/API/',
});

export const top250Movies = async () => {
  try {
    const res = await moviesApi.get<MoviesResponse<Movie>>(
      `MoviesResponse/${process.env.REACT_APP_API_KEY}`,
    );
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
    const res = await moviesApi.get<MoviesResponse<ComingSoonItem>>(
      `ComingSoon/${process.env.REACT_APP_API_KEY}`,
    );
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

export const mostPopularMovies = async () => {
  try {
    const res = await moviesApi.get<MoviesResponse<MostPopularMovie>>(
      `MostPopularMovies/${process.env.REACT_APP_API_KEY}`,
    );
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

export const singleMovie = async (id: string) => {
  try {
    const res = await moviesApi.get<SingleMovie>(
      `Title/${process.env.REACT_APP_API_KEY}/${id}/FullActor,Posters,Trailer,Images`,
    );
    return res.data;
  } catch (e) {
    console.warn(e);
    return false;
  }
};
