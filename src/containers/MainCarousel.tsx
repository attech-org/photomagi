import { Button, Carousel, Rate } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from './Dashboard';

const Main = styled.div`
  padding: 2.1rem;
`;
const Wrapper = styled.div`
  background-image: linear-gradient(transparent 50%, rgba(0, 0, 0, 0.7)),
    ${(props) => `url(${props.resource})`};
  background-position: center 25%;
  background-size: cover;
  background-repeat: no-repeat;
  height: 25rem;
  padding: 2rem;
  display: flex !important;
  justify-content: flex-start;
  align-items: flex-end;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const StyledCarousel = styled(Carousel)`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .slick-list {
    box-shadow: 0px 0px 92px 6px rgba(201, 201, 201, 0.308);
    border-radius: 5px;
  }
  .slick-dots-bottom {
    width: 83%;
    justify-content: flex-end;
  }
  .slick-dots li.slick-active button {
    background: linear-gradient(#e00000, #a10000);
    height: 7px;
    width: 150%;
    border-radius: 10px;
  }
  .slick-dots li {
    margin-right: 1rem;
  }
  .slick-dots li button {
    height: 7px;
    width: 130%;
    border-radius: 10px;
  }
`;
const Title = styled.h3`
  font-size: 45px;
  font-weight: bold;
  line-height: 1;
  margin: 0;
`;

const StyledRate = styled(Rate)`
  font-size: 13px;
  margin: 0.5rem 0;
`;
const Btn = styled(Button)`
  background: linear-gradient(#e00000, #a10000);
  border: none;
  width: 100px;
  &:hover {
    background: linear-gradient(#ac0000, #960000);
  }
`;

const MainCarouselContainer: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <Main>
    <StyledCarousel dotPosition="bottom">
      {movies
        .map(({ imDbRating, title, image, id }) => (
          <Wrapper resource={image.replace(/._.+\./, () => '._UX1000.')} key={id}>
            <Content>
              <Title>{title}</Title>
              <StyledRate
                tooltips={[imDbRating]}
                disabled
                allowHalf
                count={5}
                defaultValue={Number(imDbRating) / 2}
              />
              <Btn type="primary" size="middle">
                Watch now
              </Btn>
            </Content>
          </Wrapper>
        ))
        .slice(0, 3)}
    </StyledCarousel>
  </Main>
);

export default MainCarouselContainer;
