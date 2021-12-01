import { Button, Col, Row, Space, Tag, Typography, Image } from 'antd';
import { Link } from 'react-router-dom';
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

// const Imgage = styled.div`
//   background-image: ${(props) => `url(${props.resource})`};
//   background-position: top center;
//   background-size: cover;
//   padding: 5.5em 4em;
//   border-radius: 5px;
// `;
const AfterTitleSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 6em;
`;

// const Title = styled.h1`
//   text-transform: uppercase;
//   text-align: center;
//   font-weight: bold;
//   font-size: 35px;
// `;

// const Word = styled.p`
//   border: 1px solid gray;
//   border-radius: 3px;
//   width: 36rem;
//   text-align: center;
//   margin-right: 0.5em;
// `;

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

interface WatchMovieProps {
  singleMovie?: SingleMovie;
}

const WatchMovieContainer: React.FunctionComponent<WatchMovieProps> = ({ singleMovie }) => {
  const { Title } = Typography;
  return (
    <Wrapper resource={singleMovie?.posters?.posters[1].link}>
      <BeforeTitleSection>
        <TopInfo>
          <InfoItem>{singleMovie?.type}</InfoItem>
          <InfoItem>{singleMovie?.runtimeStr}</InfoItem>
          <InfoItem>{singleMovie?.year}</InfoItem>
        </TopInfo>
        <Title style={{ textAlign: 'center' }} level={1}>
          {singleMovie?.title}
        </Title>
      </BeforeTitleSection>

      <AfterTitleSection>
        <Row>
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
            </BtnBox>
          </Col>
          <Row gutter={[0, 16]}>
            {singleMovie?.images?.items
              .map(({ image }) => (
                <Col key={singleMovie.images?.imDbid} span={10}>
                  {' '}
                  <Image width={100} src={image} />
                </Col>
              ))
              .slice(0, 4)}{' '}
          </Row>
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
