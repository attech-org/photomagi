import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FiveFilmsCarousel from '../components/FiveFilmsCarousel';
import MainCarousel from '../components/MainCarousel';
import SidePanel from '../components/SidePanel';
import { loadMovies } from '../redux/app/actions';
import { AppStore } from '../redux/app/reducer';
import { RootStore } from '../redux/store';
import { MostPopularMovie } from '../services/types';

export interface CarouselContainerProps {
  movies: MostPopularMovie[];
}
const DashboardContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const movies = useSelector<RootStore, AppStore['movies']>((store) => store.app.movies);
  useEffect(() => {
    dispatch(loadMovies());
  }, []);
  return (
    <Row>
      <Col span={19}>
        <MainCarousel movies={movies} />
        <Col span={24}>
          <FiveFilmsCarousel movies={movies.slice(0, 20)} />
        </Col>
      </Col>
      <Col span={4}>
        <SidePanel movies={movies} />
      </Col>
    </Row>
  );
};

export default DashboardContainer;
