import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FiveFilmsCarousel from '../components/FiveFilmsCarousel';
import MainCarousel from '../components/MainCarousel';
import SidePanel from '../components/SidePanel';
import { loadMovies } from '../redux/movies/actions';
import { MoviesStore } from '../redux/movies/reducer';
import { RootStore } from '../redux/store';
import { MostPopularMovie } from '../services/types';

export interface CarouselContainerProps {
  movies: MostPopularMovie[];
}
const DashboardContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector<RootStore, MoviesStore['movies']>((store) => store.movies.movies);
  const sortedMovies = [...movies];
  sortedMovies.sort(() => (Math.random() > 0.5 ? 1 : -1));
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <Row>
      <Col sm={{ span: 24 }} lg={{ span: 19 }}>
        <MainCarousel movies={movies} />
        <Col span={24}>
          <FiveFilmsCarousel movies={sortedMovies.slice(0, 20)} />
        </Col>
      </Col>
      <Col sm={{ span: 24 }} lg={{ span: 4 }}>
        <SidePanel movies={movies} />
      </Col>
    </Row>
  );
};

export default DashboardContainer;
