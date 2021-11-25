import SidePanel from '../components/SidePanel';
import { CarouselContainerProps } from './Dashboard';

const RightPanelContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <SidePanel movies={movies} />
);
export default RightPanelContainer;
