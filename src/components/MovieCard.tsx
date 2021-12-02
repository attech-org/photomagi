import { Rate } from 'antd';
import styled from 'styled-components';

const Card = styled.div`
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
  flex: 1 0 10rem;
  min-width: 10rem;
  min-height: 14rem;
  display: flex;
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
interface MovieCardProps {
  image: string;
  id: string;
  title: string;
  imDbRating: string;
}
const MovieCard: React.FunctionComponent<MovieCardProps> = ({ id, image, title, imDbRating }) => (
  <Card resource={image.replace(/._.+\./, () => '._UX1000.')} key={id}>
    <FilmTitle>{title}</FilmTitle>
    <RateBox>
      <StyledRate disabled count={1} defaultValue={Number(imDbRating) / 2} />
      <div>{imDbRating}</div>
    </RateBox>
  </Card>
);

export default MovieCard;
