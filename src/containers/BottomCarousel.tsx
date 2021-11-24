import { Carousel, Space } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from './Dashboard';

const StyledCarousel = styled(Carousel)``;
const StyledImg = styled.img`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
`;

const Slide = styled.div`
  width: 100%;
`;
const StyledSpace = styled(Space)`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
const BottomCarouselContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => {
  const slidesCount = Math.ceil(movies.length / 5);

  return (
    <StyledCarousel autoplay>
      {Array(slidesCount)
        .fill(0)
        .map((el, i) => (
          <div key={`slide_${Date.now()}`}>
            <StyledSpace>
              {movies.slice(i * 5, (i + 1) * 5).map(({ image, id }) => (
                <Slide key={id}>
                  <StyledImg src={image} alt="blabla" />
                </Slide>
              ))}
            </StyledSpace>
          </div>
        ))}
    </StyledCarousel>
  );
};

export default BottomCarouselContainer;
