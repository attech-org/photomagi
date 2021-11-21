/* eslint-disable no-nested-ternary */
import { Button, Card, Divider, Image, Layout, Progress, Space } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled, { css } from 'styled-components';

import { loadFighters } from './redux/app/actions';
import { AppStore, Fighter } from './redux/app/reducer';
import { RootStore } from './redux/store';

const general = css`
  .ant-card-body {
    background-color: white;
  }
`;

const rotate = css`
  .ant-space-item {
    .ant-image-img {
      height: 300px;
    }
    &:last-of-type {
      .ant-image-img {
        transform: rotateY(180deg);
      }
    }
  }
`;

const Wrapper = styled(Layout)`
  ${general}
  height: 100vh;
`;

const Content = styled(Layout.Content)`
  background: ${(props) => `${
    props['aria-expanded'] ? 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), ' : ''
  }
      url('https://cutewallpaper.org/21/street-fighter-background/Street-Fighter-background-Street-fighter-characters-.jpg')
    `};
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

const Arena = styled(Space)`
  ${rotate}
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  height: 80vh;
`;

const Img = styled.img``;

const RotatedImg = styled(Img)`
  transform: rotateY(180deg);
`;

const HP = styled.div`
  background-color: red;
  padding: 0 0.5rem;
  border-radius: 5px;
  display: flex;
  align-items: center;
  width: 300px;
`;

const WinPanel = styled(Space)`
  width: 100%;
  align-items: center;
`;

const WinnerName = styled.div`
  font-size: 60px;
  color: orange;
  font-weight: bold;
  text-align: center;
`;

const sleep = (ms: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, ms);
  });

const App: React.FunctionComponent = () => {
  const dispatch = useDispatch();
  const fighters = useSelector<RootStore, AppStore['fighters']>((store) => store.app.fighters);
  const [selectedFighters, onSelectedFightersChange] = useState<string[]>([]); // done
  const [[fighter1, fighter2], onFightersChange] = useState<Fighter[]>([]);
  const [isFighting, onFightingStateChange] = useState<boolean>(false); // done
  const [winnerName, onWinnerNameChange] = useState<string>(''); // done

  useEffect(() => {
    onFightersChange(
      selectedFighters.map((name) => fighters.find((el) => el.name === name) as Fighter),
    );
  }, [selectedFighters]);

  const kick = async (attacker: Fighter, defencer: Fighter) => {
    await sleep(1000);
    const kickValue = attacker.attack * (defencer.defense / 3);
    const tempDefencer: Fighter = {
      ...defencer,
      health: Math.floor(defencer.health - kickValue),
    };
    if (tempDefencer.health <= 0) {
      onWinnerNameChange(attacker.name);
      onFightingStateChange(false);
    } else {
      kick(tempDefencer, attacker);
    }
    onFightersChange(
      [fighter1, fighter2].map((el) => (el.name === tempDefencer.name ? tempDefencer : attacker)),
    );
  };

  useEffect(() => {
    if (isFighting) {
      kick(fighter1, fighter2);
    }
  }, [isFighting]);

  const fetchUsers = async () => {
    dispatch(loadFighters());
  };

  const handleFightClick = () => onFightingStateChange(!isFighting);

  const handleFighterClick = (fighterName: string) => {
    if (selectedFighters.length < 2) {
      onSelectedFightersChange([...selectedFighters, fighterName]);
    }
    if (selectedFighters.includes(fighterName)) {
      onSelectedFightersChange(selectedFighters.filter((name) => name !== fighterName));
    }
  };

  const handleNewFight = () => {
    onWinnerNameChange('');
    onSelectedFightersChange([]);
    onFightersChange([]);
  };

  return (
    <Wrapper>
      <Content aria-expanded={!isFighting}>
        {winnerName ? (
          <WinPanel direction="vertical">
            <Img src="https://pngimage.net/wp-content/uploads/2018/06/ko-png-3.png" />
            <WinnerName>{winnerName}</WinnerName>
            <Button onClick={handleNewFight}>Start new fight</Button>
          </WinPanel>
        ) : isFighting ? (
          <Arena align="center">
            <Space direction="vertical">
              <Img alt="example" src={fighter1.source} />
              <HP>
                <Progress
                  percent={
                    100 *
                    (fighter1.health /
                      (fighters.find((el) => el.name === fighter1.name)?.health || 100))
                  }
                  showInfo={false}
                />
              </HP>
            </Space>
            <Space direction="vertical">
              <RotatedImg alt="example" src={fighter2.source} />
              <HP>
                <Progress
                  percent={
                    100 *
                    (fighter2.health /
                      (fighters.find((el) => el.name === fighter2.name)?.health || 100))
                  }
                  showInfo={false}
                />
              </HP>
            </Space>
          </Arena>
        ) : (
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
        )}
        <Divider />
        {!isFighting && !winnerName && (
          <ControlPanel>
            <Button
              onClick={handleFightClick}
              disabled={selectedFighters.length < 2}
              type="primary"
              danger
              size="large"
            >
              Fight!
            </Button>
          </ControlPanel>
        )}
      </Content>
    </Wrapper>
  );
};

export default App;
