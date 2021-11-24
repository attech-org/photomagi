import { Button, Carousel } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from './Dashboard';

const Wrapper = styled.div`
  background-image: ${(props) => `url(${props.resource})`};
  background-position: center 25%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 25rem;
`;
const StyledCarousel = styled(Carousel)`
  width: 100%;
  padding: 30px 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  .slick-list {
    box-shadow: 0px 0px 92px 6px rgba(201, 201, 201, 0.308);
    border-radius: 5px;
  }
`;
const Btn = styled(Button)`
  background: linear-gradient(#e00000, #a10000);
  border: none;
  &:hover {
    background: linear-gradient(#ac0000, #960000);
  }
`;

const MainCarouselContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <StyledCarousel>
    {movies
      .map(({ imDbRating, title, image, id }) => (
        <Wrapper resource={image.replace(/._.+\./, () => '._UX1000.')} key={id}>
          <h3>{title}</h3>
          <p>{imDbRating}</p>
          <Btn type="primary" size="middle">
            Watch now
          </Btn>
        </Wrapper>
      ))
      .slice(0, 3)}
  </StyledCarousel>
);

export default MainCarouselContainer;
