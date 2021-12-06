import { Button, Col, Row, Space, Tag, Typography, Image } from 'antd';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import MovieCard from '../components/MovieCard';
import { loadMovieTrailer } from '../redux/movies/actions';
import { MoviesStore } from '../redux/movies/reducer';
import { RootStore } from '../redux/store';
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
  @media screen and (max-width: 576px) {
    padding: 2rem 1rem;
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 2.5rem;
  }
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
  @media screen and (max-width: 576px) {
    margin-bottom: 2.5rem;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

const Keywords = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5em;
  margin-bottom: 0.5em;
  @media screen and (max-width: 576px) {
    margin-bottom: 0;
  }
`;

const Plot = styled.p`
  @media screen and (max-width: 768px) {
    margin: 1rem 0 1.5rem;
  }
`;
const BtnBox = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 576px) {
    margin-botton: 2rem;
  }
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

const ButtonTrailer = styled(Button)`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent !important;
  padding: 0;
  border: solid 1px #ac0000 !important;
  &:hover {
    background: rgba(255, 0, 0, 0.4) !important;
    color: lightgray !important;
  }
`;

const Similar = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const SlideContent = styled(Space)`
  width: 100%;
  @media screen and (max-width: 768px) {
    justify-content: space-around;
  }
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

  const dispatch = useDispatch();
  const trailer = useSelector<RootStore, MoviesStore['trailer']>((store) => store.movies.trailer);

  useEffect(() => {
    dispatch(loadMovieTrailer(singleMovie?.id));
  }, [singleMovie?.id]);

  return (
    <Wrapper resource={singleMovie?.posters?.posters[1].link}>
      <BeforeTitleSection>
        <TopInfo>
          <InfoItem>
            {singleMovie?.type.toUpperCase().includes('MOVIE') ? (
              <i className="bi bi-camera-reels"> {singleMovie?.type}</i>
            ) : (
              <i className="bi bi-tv"> {singleMovie?.type}</i>
            )}
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
          <Col span={12} xs={24} md={22}>
            <Keywords>
              {singleMovie?.keywords.split(',').map((word) => (
                <Tag key={singleMovie.id}>{word}</Tag>
              ))}
            </Keywords>
            <Plot>{singleMovie?.plot}</Plot>
            <BtnBox>
              <Link to={`/watchnow/${singleMovie?.id}`}>
                <Btn type="primary" size="middle" danger>
                  Watch now
                </Btn>
              </Link>
              {trailer?.link ? (
                <ButtonTrailer href={trailer?.link} type="primary" size="middle" danger>
                  Watch trailer
                </ButtonTrailer>
              ) : null}
            </BtnBox>
          </Col>
          <Col span={12} xs={24} md={22}>
            {singleMovie?.images?.items.slice(0, 4).map(({ image }) => (
              <StyledImage width="50%" src={image} key={singleMovie.images?.imDbid} />
            ))}
          </Col>
        </Row>
      </AfterTitleSection>
      <Similar>Similar:</Similar>
      <SlideContent align="center" wrap>
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
