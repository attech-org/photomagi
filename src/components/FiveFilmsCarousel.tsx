import { LoadingOutlined } from '@ant-design/icons';
import { Carousel, Space, Spin } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from '../containers/Dashboard';
import MovieCard from './MovieCard';

const Content = styled.section`
  padding: 0 1.5rem;
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

const SlideContent = styled(Space)`
  width: 100%;
  justify-content: space-between;
`;

const FiveFilmsCarousel: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => {
  const slidesCount = Math.ceil(movies.length / 5);
  let slidesContentCount = 5;
  if (window.innerWidth <= 600) {
    slidesContentCount = 2;
  }
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
                {movies
                  .slice(i * slidesContentCount, (i + 1) * slidesContentCount)
                  .map(({ image, id, title, imDbRating }) => (
                    <MovieCard
                      key={id}
                      id={id}
                      imDbRating={imDbRating}
                      image={image}
                      title={title}
                    />
                  ))}
              </SlideContent>
            </div>
          ))}
      </StyledCarousel>
    </Content>
  );
};

export default FiveFilmsCarousel;
