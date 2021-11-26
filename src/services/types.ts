export type MoviesResponse<T> = {
  errorMessage: string;
  items: T[];
};
export interface Movie {
  // max.haveSexWith(typeScript)
  crew: string;
  fullTitle: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  rank: string;
  title: string;
  year: string;
}
export interface MostPopularMovie extends Movie {
  rankUpDown: string;
}
export interface ComingSoonItem {
  contentRating: string;
  directorList: ComingSoonDirectorList[];
  directors: string;
  fullTitle: string;
  genreList: ComingSoonOtherList[];
  genres: string;
  id: string;
  imDbRating: string;
  imDbRatingCount: string;
  image: string;
  metacriticRating: string;
  plot: string;
  releaseState: string;
  runtimeMins: string;
  runtimeStr: string;
  starList: ComingSoonOtherList[];
  stars: string;
  title: string;
  year: string;
}

interface ComingSoonDirectorList {
  id: string;
  name: string;
}

interface ComingSoonOtherList {
  key: string;
  value: string;
}
