import { Button, Card, Divider, Image, Layout, Space } from 'antd';
import { useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

// import { decreaseCounter, increaseCounter, loadFighters } from './redux/app/actions';
import { AppStore } from './redux/app/reducer';
import { RootStore } from './redux/store';

const general = css`
  .ant-card-body {
    background-color: white;
  }
`;

const Wrapper = styled(Layout)`
  ${general}
  height: 100vh;
`;

const Content = styled(Layout.Content)`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('https://cutewallpaper.org/21/street-fighter-background/Street-Fighter-background-Street-fighter-characters-.jpg');
  background-size: auto 100%;
  background-position: center;
  overflow: auto;
  padding: 5rem;
`;

const FighterCard = styled(Card)`
  margin: 1rem;
  background-color: rgba(238, 130, 238, 0.4);
  width: 200px;
`;

const FighterCardMeta = styled(Card.Meta)``;

const StyledFighterImage = styled(Image)`
  height: 150px;
  width: auto;
  margin: 1rem auto;
`;

const FightersPanel = styled(Space)`
  width: 100%;
  overflow-x: auto;
  background-color: wheat;
`;

const ControlPanel = styled(Space)`
  width: 100%;
  overflow-x: auto;
  background-color: wheat;
  padding: 1rem;
  display: flex;
  justify-content: center;
`;

const App: React.FunctionComponent = () => {
  // const dispatch = useDispatch();
  // const count = useSelector<RootStore, AppStore['counter']>((store) => store.app.counter);
  const fighters = useSelector<RootStore, AppStore['fighters']>((store) => store.app.fighters);

  // const handleInc = () => {
  //   dispatch(increaseCounter(1));
  // };

  // const handleDec = () => {
  //   dispatch(decreaseCounter(1));
  // };

  // const fetchUsers = async () => {
  //   dispatch(loadFighters());
  // };

  return (
    <Wrapper>
      <Layout.Header>Header</Layout.Header>
      <Content>
        {/* <Button onClick={handleInc} shape="circle">
          +
        </Button>
        {count}
        <Button onClick={handleDec} shape="circle">
          -
        </Button>
        <Button onClick={fetchUsers}>Get All Users</Button> */}
        <FightersPanel>
          {fighters.map(({ name, source, attack, defense, health }) => (
            <FighterCard
              key={name}
              hoverable
              cover={<StyledFighterImage alt="example" src={source} />}
            >
              <FighterCardMeta
                title={name}
                description={`Attack: ${attack} Defence: ${defense} Health: ${health}`}
              />
            </FighterCard>
          ))}
        </FightersPanel>
        <Divider />
        <ControlPanel>
          <Button type="primary" danger size="large">
            Fight!
          </Button>
        </ControlPanel>
      </Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Wrapper>
  );
};

export default App;
