import { Button, Card, Layout, Space } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { decreaseCounter, increaseCounter, loadFighters } from './redux/app/actions';
import { AppStore } from './redux/app/reducer';
import { RootStore } from './redux/store';

const Wrapper = styled(Layout)`
  background-color: violet;
  height: 100vh;
`;

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const count = useSelector<RootStore, AppStore['counter']>((store) => store.app.counter);
  const fighters = useSelector<RootStore, AppStore['fighters']>((store) => store.app.fighters);

  const handleInc = () => {
    dispatch(increaseCounter(1));
  };

  const handleDec = () => {
    dispatch(decreaseCounter(1));
  };

  const fetchUsers = async () => {
    dispatch(loadFighters());
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
        <Button onClick={fetchUsers}>Get All Users</Button>
        <Space align="center">
          {fighters.map(({ name, source, attack, defense, health }) => (
            <Card
              key={name}
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src={source} />}
            >
              <Card.Meta
                title={name}
                description={`Attack: ${attack} Defence: ${defense} Health: ${health}`}
              />
            </Card>
          ))}
        </Space>
      </Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Wrapper>
  );
};

export default App;
