import { Carousel } from 'antd';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppStore } from '../redux/app/reducer';
import { RootStore } from '../redux/store';

const StyledCarousel = styled(Carousel)``;
const Slide1 = styled.h3`
  height: 160px;
  color: #fff;
  line-height: 160px;
  text-align: center;
  background: url('https://klike.net/uploads/posts/2019-05/1556708032_1.jpg');
`;
const Slide2 = styled(Slide1)`
  background: url('https://vypechka-online.ru/wp-content/uploads/2019/09/EQgJ4p77Aeo.jpg');
`;
const DashboardContainer: React.FunctionComponent = () => {
  const movies = useSelector<RootStore, AppStore['movies']>((store) => store.app.movies);
  console.log('Axios', movies);
  return (
    <StyledCarousel autoplay>
      <div>
        <Slide1>1</Slide1>
      </div>
      <div>
        <Slide2>2</Slide2>
      </div>
      <div>
        <Slide1>3</Slide1>
      </div>
      <div>
        <Slide1>4</Slide1>
      </div>
    </StyledCarousel>
  );
};
export default DashboardContainer;