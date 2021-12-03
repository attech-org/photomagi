import { Button } from 'antd';
import styled from 'styled-components';

interface BtnTrailerProps {
  id?: string;
}

const BtnTrailer: React.FC<BtnTrailerProps> = ({ id }) => {
  const ButtonTrailer = styled(Button)`
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent !important;
    border: solid 1px #ac0000 !important;
    &:hover {
      background: rgba(255, 0, 0, 0.4) !important;
      color: lightgray !important;
    }
  `;

  return (
    <ButtonTrailer
      href={`https://imdb-api.com/en/API/Trailer/${process.env.REACT_APP_API_KEY}/${id}`}
      type="primary"
      size="middle"
      danger
    >
      Watch trailer
    </ButtonTrailer>
  );
};

export default BtnTrailer;
