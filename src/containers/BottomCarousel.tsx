import { Carousel } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from './Dashboard';

const StyledCarousel = styled(Carousel)``;
const StyledImg = styled.img`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
`;
const BottomCarouselContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <StyledCarousel autoplay>
    {movies
      .map(({ image, id }) => (
        <div key={id}>
          <StyledImg src={image} alt="blabla" />
        </div>
      ))
      .slice(0, 3)}
  </StyledCarousel>
);

export default BottomCarouselContainer;
