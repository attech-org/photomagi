import { Button, Col, Row, Space, Tag, Typography, Image } from 'antd';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import BtnTrailer from '../components/BtnTrailer';
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
  margin-bottom: 6em;
`;

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 0.5em;
`;

const Plot = styled.p``;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
`;

const Btn = styled(Button)`
  background: linear-gradient(#e00000, #a10000) !important;
  border: none;
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    margin-right: 10px;
  }
  &:hover {
    background: linear-gradient(#ac0000, #960000) !important;
  }
`;

const Similar = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const SlideContent = styled(Space)`
  width: 100%;
`;
const StyledImage = styled(Image)`
  width: calc(100% - 0.5rem * 2);
  margin: 0.25rem 0.5rem;
`;

interface WatchMovieProps {
  singleMovie?: SingleMovie;
}

const WatchMovieContainer: React.FunctionComponent<WatchMovieProps> = ({ singleMovie }) => {
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
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Keywords>
              {singleMovie?.keywords.split(',').map((word) => (
                <Tag key={singleMovie.id}>{word}</Tag>
              ))}
            </Keywords>
            <Plot>{singleMovie?.plot}</Plot>
            <BtnBox>
              <Link to="/">
                <Btn type="primary" size="middle" danger>
                  Watch now
                </Btn>
              </Link>
              <Link to="/">
                <BtnTrailer />
              </Link>
            </BtnBox>
          </Col>
          <Col span={12}>
            {singleMovie?.images?.items.slice(0, 4).map(({ image }) => (
              <StyledImage width="50%" src={image} key={singleMovie.images?.imDbid} />
            ))}
          </Col>
        </Row>
      </AfterTitleSection>
      <Similar>Similar:</Similar>
      <SlideContent>
        {singleMovie?.similars
          .map(({ image, fullTitle, id, imDbRating }) => (
            <MovieCard key={id} id={id} imDbRating={imDbRating} image={image} title={fullTitle} />
          ))
          .slice(0, 6)}
      </SlideContent>
    </Wrapper>
  );
};

export default WatchMovieContainer;
