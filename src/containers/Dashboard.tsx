import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadMovies } from '../redux/app/actions';
import { AppStore } from '../redux/app/reducer';
import { RootStore } from '../redux/store';
import { MostPopularMovie } from '../services/types';
import BottomCarouselContainer from './BottomCarousel';
import MainCarouselContainer from './MainCarousel';
import RightPanelContainer from './RightPanel';

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
        <MainCarouselContainer movies={movies} />
        <Col span={24}>
          <BottomCarouselContainer movies={movies} />
        </Col>
      </Col>
      <Col span={4}>
        <RightPanelContainer movies={movies} />
      </Col>
    </Row>
  );
};

export default DashboardContainer;
