import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../containers/Layout';
import WatchMovieContainer from '../containers/WatchMovie';
import { loadMovieTitle } from '../redux/movies/actions';
import { MoviesStore } from '../redux/movies/reducer';
import { RootStore } from '../redux/store';

export interface MovieIdProps {
  movieId: string;
}
const WatchMoviePage: React.FunctionComponent<MovieIdProps> = ({ movieId }) => {
  const dispatch = useDispatch();
  const singleMovie = useSelector<RootStore, MoviesStore['singleMovie']>(
    (store) => store.movies.singleMovie,
  );
  useEffect(() => {
    dispatch(loadMovieTitle(movieId));
  }, [movieId]);
  return (
    <Layout>
      <WatchMovieContainer singleMovie={singleMovie} />
    </Layout>
  );
};

export default WatchMoviePage;
