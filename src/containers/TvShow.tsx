import { Col, Row } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FiveFilmsCarousel from '../components/FiveFilmsCarousel';
import MainCarousel from '../components/MainCarousel';
import SidePanel from '../components/SidePanel';
import { loadTVs } from '../redux/movies/actions';
import { MoviesStore } from '../redux/movies/reducer';
import { RootStore } from '../redux/store';
import { MostPopularMovie } from '../services/types';

export interface CarouselContainerProps {
  movies: MostPopularMovie[];
}
const TvShowContainer: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const series = useSelector<RootStore, MoviesStore['series']>((store) => store.movies.series);
  const sortedSeries = [...series];
  sortedSeries.sort(() => (Math.random() > 0.5 ? 1 : -1));
  useEffect(() => {
    dispatch(loadTVs());
  }, []);
  return (
    <Row>
      <Col span={19}>
        <MainCarousel movies={series} />
        <Col span={24}>
          <FiveFilmsCarousel movies={sortedSeries.slice(0, 20)} />
        </Col>
      </Col>
      <Col span={4}>
        <SidePanel movies={series} />
      </Col>
    </Row>
  );
};

export default TvShowContainer;
