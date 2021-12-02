import { Space, Typography } from 'antd';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { ReactYouTubeLite } from 'react-youtube-lite';
import styled from 'styled-components';

import MovieCard from '../components/MovieCard';
import { SingleMovie } from '../services/types';

const Wrapper = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.425) 0%, rgb(0, 0, 0)),
    ${(props) => `url(${props.resource})`};
  background-position: top center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 7em 10em;
`;

const BeforeTitleSection = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const TopInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`;
const InfoItem = styled.p`
  text-transform: uppercase;
  margin: 0 1em;
`;

const AfterTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 3rem;
`;

const Similar = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const SlideContent = styled(Space)`
  width: 100%;
`;

interface WatchMovieProps {
  singleMovie?: SingleMovie;
}

const WatchNowContainer: React.FC<WatchMovieProps> = ({ singleMovie }) => {
  const { Title } = Typography;
  return (
    <Wrapper resource={singleMovie?.posters?.posters[1].link}>
      <BeforeTitleSection>
        <TopInfo>
          <InfoItem>
            <i className="bi bi-camera-reels"> {singleMovie?.type}</i>
          </InfoItem>

          <InfoItem>
            {singleMovie?.runtimeMins !== '' ? (
              <i className="bi bi-stopwatch"> {singleMovie?.runtimeStr}</i>
            ) : (
              <div />
            )}
          </InfoItem>

          <InfoItem>
            <i className="bi bi-calendar2"> {singleMovie?.year}</i>
          </InfoItem>
        </TopInfo>
        <Title style={{ textAlign: 'center' }} level={1}>
          {singleMovie?.title}
        </Title>
      </BeforeTitleSection>

      <AfterTitleSection>
        <ReactYouTubeLite
          url="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
          playlist={false}
          adNetwork={false}
        />
      </AfterTitleSection>
      <Similar>Similar:</Similar>
      <SlideContent>
        {singleMovie?.similars.slice(0, 5).map(({ image, fullTitle, id, imDbRating }) => (
          <MovieCard key={id} id={id} imDbRating={imDbRating} image={image} title={fullTitle} />
        ))}
      </SlideContent>
    </Wrapper>
  );
};

export default WatchNowContainer;
