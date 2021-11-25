import FiveFilmsCarousel from '../components/FiveFilmsCarousel';
import { CarouselContainerProps } from './Dashboard';

const BottomCarouselContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <FiveFilmsCarousel movies={movies} />
);

export default BottomCarouselContainer;
