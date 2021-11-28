import { SingleMovie } from '../services/types';

interface WatchMovieProps {
  singleMovie?: SingleMovie;
}

const WatchMovieContainer: React.FunctionComponent<WatchMovieProps> = ({ singleMovie }) => (
  <div>{singleMovie?.title}</div>
);

export default WatchMovieContainer;
