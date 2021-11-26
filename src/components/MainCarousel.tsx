import { LoadingOutlined } from '@ant-design/icons';
import { Button, Carousel, Rate, Spin } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from '../containers/Dashboard';

const Main = styled.div`
  padding: 2rem;
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
    box-shadow: 0px 0px 40px rgba(201, 201, 201, 0.308);
    border-radius: 5px;
  }
  .slick-dots-bottom {
    width: 83%;
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
  background: linear-gradient(#e00000, #a10000) !important;
  border: none;
  width: 100px;
  &:hover {
    background: linear-gradient(#ac0000, #960000) !important;
  }
`;
const SpinContainer = styled(Wrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(128, 128, 128, 0.24);
  border-radius: 5px;
`;

const MainCarousel: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => {
  const antIcon = <LoadingOutlined style={{ color: 'red', fontSize: 24 }} spin />;
  return (
    <Main>
      {!movies.length && (
        <SpinContainer>
          <Spin indicator={antIcon} />
        </SpinContainer>
      )}
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
                <Btn type="primary" size="middle" danger>
                  Watch now
                </Btn>
              </Content>
            </Wrapper>
          ))
          .slice(0, 3)}
      </StyledCarousel>
    </Main>
  );
};

export default MainCarousel;
