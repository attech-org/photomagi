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

export interface MovieTitle {
  actorList: ActorList[];
  awards: string;
  boxOffice: BoxOffice;
  companies: string;
  companyList: ComingSoonDirectorList[];
  contentRating: string;
  countries: string;
  countryList: ComingSoonOtherList[];
  directorList: ComingSoonDirectorList[];
  directors: string;
  errorMessage: string;
  fullCast?: string;
  fullTitle: string;
  genreList: ComingSoonDirectorList[];
  genres: string;
  id: string;
  imDbRating: string;
  imDbRatingVotes: string;
  image: string;
  images?: string;
  keywordList: string[];
  keywords: string;
  languageList: ComingSoonOtherList[];
  languages: string;
  metacriticRating: string;
  originalTitle: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: boolean;
  posters?: string;
  ratings?: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  similars: Similars[];
  starList: ComingSoonDirectorList[];
  stars: string;
  tagline: string;
  title: string;
  trailer?: string;
  tvEpisodeInfo?: string;
  tvSeriesInfo?: string;
  type: string;
  wikipedia?: string;
  writerList: ComingSoonDirectorList[];
  writers: string;
  year: string;
}

interface ActorList {
  asCharacter: string;
  id: string;
  image: string;
  name: string;
}

interface BoxOffice {
  budget: string;
  cumulativeWorldwideGross: string;
  grossUSA: string;
  openingWeekendUSA: string;
}

interface Similars {
  directors: string;
  fullTitle: string;
  genres: string;
  id: string;
  imDbRating: string;
  image: string;
  plot: string;
  stars: string;
  title: string;
  year: string;
}
