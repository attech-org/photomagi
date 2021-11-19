import { Button, Card, Divider, Image, Layout, Space } from 'antd';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { loadFighters } from './redux/app/actions';
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
  box-shadow: ${(props) => {
    if (props['aria-colindex'] === 0) {
      return '0 0 0 5px blue';
    }
    if (props['aria-colindex'] === 1) {
      return '0 0 0 5px green';
    }
    return 'none';
  }};
`;

const FighterCardMeta = styled(Card.Meta)``;

const StyledFighterImage = styled(Image)`
  height: 150px;
  width: auto;
  margin: 1rem auto;
`;

const FightersPanel = styled(Space)`
  width: 100%;
  min-height: 200px;
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
  const dispatch = useDispatch();
  const fighters = useSelector<RootStore, AppStore['fighters']>((store) => store.app.fighters);
  const [selectedFighters, onSelectedFightersChange] = useState<string[]>([]);

  const fetchUsers = async () => {
    dispatch(loadFighters());
  };

  const handleFighterClick = (fighterName: string) => {
    if (selectedFighters.length < 2) {
      onSelectedFightersChange([...selectedFighters, fighterName]);
    }
    if (selectedFighters.includes(fighterName)) {
      onSelectedFightersChange(selectedFighters.filter((name) => name !== fighterName));
    }
  };

  return (
    <Wrapper>
      <Layout.Header>Header</Layout.Header>
      <Content>
        <FightersPanel>
          {fighters.length ? (
            fighters.map(({ name, source, attack, defense, health }) => (
              <FighterCard
                key={name}
                aria-colindex={selectedFighters.indexOf(name)}
                onClick={() => handleFighterClick(name)}
                cover={<StyledFighterImage alt="example" src={source} />}
              >
                <FighterCardMeta
                  title={name}
                  description={`Attack: ${attack} Defence: ${defense} Health: ${health}`}
                />
              </FighterCard>
            ))
          ) : (
            <Button onClick={fetchUsers}>Load fighters</Button>
          )}
        </FightersPanel>
        <Divider />
        <ControlPanel>
          <Button disabled={selectedFighters.length < 2} type="primary" danger size="large">
            Fight!
          </Button>
        </ControlPanel>
      </Content>
    </Wrapper>
  );
};

export default App;
