import { Button, Rate } from 'antd';
import styled from 'styled-components';

import { CarouselContainerProps } from '../containers/Dashboard';

const Content = styled.div`
  padding-top: 15px;
`;
const Wrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  width: 100px;
`;

const BoxTitle = styled.h3`
  font-size: 22px;
  line-height: 2em;
`;

const FilmTitle = styled.p`
  font-size: 16px;
  line-height: 1.2em;
`;

const Year = styled.p`
  font-size: 12px;
  color: gray;
`;
const StyledRate = styled(Rate)`
  font-size: 13px;
`;
const Image = styled.img`
  margin-right: 15px;
  border-radius: 10px;
  width: 128px;
  height: 176px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Btn = styled(Button)`
  background: linear-gradient(#e00000, #a10000) !important;
  border: none;
  &:hover {
    background: linear-gradient(#ac0000, #960000) !important;
  }
`;
const SidePanel: React.FunctionComponent<CarouselContainerProps> = ({ movies }) => (
  <Content>
    <BoxTitle>Popular Movie</BoxTitle>
    {movies
      .map(({ image, id, title, year, imDbRating }) => (
        <Wrapper key={id}>
          <Image src={image.replace(/._.+\./, () => '._UX1000.')} alt="blabla" />
          <Info>
            <FilmTitle>
              {title}
              <Year>{year}</Year>
            </FilmTitle>

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
          </Info>
        </Wrapper>
      ))
      .slice(3, 8)}
  </Content>
);
export default SidePanel;
