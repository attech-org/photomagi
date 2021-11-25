import MainCarousel from '../components/MainCarousel';
import { CarouselContainerProps } from './Dashboard';

const MainCarouselContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <MainCarousel movies={movies} />
);
export default MainCarouselContainer;
