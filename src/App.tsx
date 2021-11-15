import { Button, Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { decreaseCounter, increaseCounter } from './redux/app/actions';
import { AppStore } from './redux/app/reducer';
import { RootStore } from './redux/store';

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
`;

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootStore, AppStore['counter']>((store) => store.app.counter);

  const handleInc = () => {
    dispatch(increaseCounter(1));
  };

  const handleDec = () => {
    dispatch(decreaseCounter(1));
  };

  return (
    <Wrapper>
      <Layout.Header>Header</Layout.Header>
      <Layout.Content>
        <Button onClick={handleInc} shape="circle">
          +
        </Button>
        {count}
        <Button onClick={handleDec} shape="circle">
          -
        </Button>
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Wrapper>
  );
};

export default App;
