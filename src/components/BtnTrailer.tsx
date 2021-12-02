import { Button } from 'antd';
import styled from 'styled-components';

const BtnTrailer = () => {
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
    <ButtonTrailer type="primary" size="middle" danger>
      Watch trailer
    </ButtonTrailer>
  );
};

export default BtnTrailer;
