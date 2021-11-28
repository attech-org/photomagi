import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadMovieTitle } from '../redux/app/actions';
import { AppStore } from '../redux/app/reducer';
import { RootStore } from '../redux/store';

export interface MovieIdProps {
  movieId: string;
}
const WatchMoviePage: React.FunctionComponent<MovieIdProps> = ({ movieId }) => {
  const dispatch = useDispatch();
  const movies = useSelector<RootStore, AppStore['movieTitle']>((store) => store.app.movieTitle);
  useEffect(() => {
    dispatch(loadMovieTitle(movieId));
  }, [movieId]);
  console.log(movies);
  return <div>Watch a movie!</div>;
};

export default WatchMoviePage;
