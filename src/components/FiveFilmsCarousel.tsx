import { LoadingOutlined } from '@ant-design/icons';
import { Carousel, Rate, Space, Spin } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from '../containers/Dashboard';

const Content = styled.section`
  padding: 0 2rem;
`;
const TopTitle = styled.p`
  font-size: 180%;
`;
const StyledCarousel = styled(Carousel)`
  padding-bottom: 2rem;
  .slick-dots-bottom {
    width: 100%;
    margin: 0;
    justify-content: flex-end;
  }
  .slick-dots li.slick-active button {
    background: linear-gradient(#e00000, #a10000);
    padding: 0.2rem;
    border-radius: 10px;
  }
  .slick-dots li {
    margin-right: 1rem;
  }
  .slick-dots li button {
    padding: 0.2rem;
    border-radius: 10px;
    background-color: gray;
  }
  .ant-space-item {
    flex: 1 0 10rem;
    min-width: 10rem;
    min-height: 14rem;
    display: flex;
  }
`;
const MovieCard = styled.div`
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.61) 0%,
      rgba(0, 0, 0, 0.14) 25%,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.15) 65%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    ${(props) => `url(${props.resource})`};
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.5rem;
`;

const SlideContent = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const FilmTitle = styled.p`
  font-weight: bold;
  line-height: 1.15em;
  color: #f5f5f5;
`;
const RateBox = styled.div`
  display: flex;
`;
const StyledRate = styled(Rate)`
  font-size: 13px;
  margin-right: 0.3rem;
`;

const FiveFilmsCarousel: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => {
  const slidesCount = Math.ceil(movies.length / 5);
  const antIcon = <LoadingOutlined style={{ color: 'red', fontSize: 24 }} spin />;
  return (
    <Content>
      <TopTitle>Now Playing {!movies.length && <Spin indicator={antIcon} />}</TopTitle>

      <StyledCarousel autoplay dotPosition="bottom">
        {Array(slidesCount)
          .fill(0)
          .map((el, i) => (
            <div key={`slide_${Date.now()}`}>
              <SlideContent>
                {movies.slice(i * 5, (i + 1) * 5).map(({ image, id, title, imDbRating }) => (
                  <MovieCard resource={image.replace(/._.+\./, () => '._UX1000.')} key={id}>
                    <FilmTitle>{title}</FilmTitle>
                    <RateBox>
                      <StyledRate disabled count={1} defaultValue={Number(imDbRating) / 2} />
                      <div>{imDbRating}</div>
                    </RateBox>
                  </MovieCard>
                ))}
              </SlideContent>
            </div>
          ))}
      </StyledCarousel>
    </Content>
  );
};

export default FiveFilmsCarousel;
