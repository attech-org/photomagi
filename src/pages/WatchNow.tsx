import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Layout from '../containers/Layout';
import WatchNowContainer from '../containers/WatchNow';
import { loadMovieTitle } from '../redux/app/actions';
import { AppStore } from '../redux/app/reducer';
import { RootStore } from '../redux/store';

export interface MovieIdProps {
  movieId: string;
}
const WatchNowPage: React.FC<MovieIdProps> = ({ movieId }) => {
  const dispatch = useDispatch();
  const singleMovie = useSelector<RootStore, AppStore['singleMovie']>(
    (store) => store.app.singleMovie,
  );
  useEffect(() => {
    dispatch(loadMovieTitle(movieId));
  }, [movieId]);
  return (
    <Layout>
      <WatchNowContainer singleMovie={singleMovie} />
    </Layout>
  );
};

export default WatchNowPage;
