import {
  AppstoreFilled,
  DatabaseFilled,
  DingtalkSquareFilled,
  FolderViewOutlined,
  LogoutOutlined,
  PlayCircleFilled,
  SettingFilled,
  StarFilled,
  SwapOutlined,
} from '@ant-design/icons';
import { Badge, Button, Divider, Input, Menu, Row } from 'antd';
import Text from 'antd/lib/typography/Text';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useEffect } from 'react';
import { slide as BurgerMenu } from 'react-burger-menu';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/img/logo.png';
import LoginModal from '../components/Login';
import RegisterModal from '../components/Register';
import { auth } from '../firebase/firebase-config';
import { setUser } from '../redux/profile/actions';
import { ProfileStore } from '../redux/profile/reducer';
import { RootStore } from '../redux/store';

const { Item } = Menu;
const { Search } = Input;

const RowWrap = styled(Row)`
  display: none;
  @media screen and (max-width: 576px) {
    display: inline-flex;
    &:first-child {
      flex-direction: row-reverse;
      margin-bottom: 1rem;
    }
  }
`;

const Logo = styled.img`
  display: block;
  width: 32px;
  &:hover {
    opacity: 0.75;
  }
`;

const SearchResult = styled(Search)`
  width: 70vw;
  margin: 0 1rem;
  @media screen and (max-width: 530px) {
    width: 69vw;
  }
  @media screen and (max-width: 490px) {
    width: 67vw;
  }
  @media screen and (max-width: 450px) {
    width: 65vw;
  }
  @media screen and (max-width: 400px) {
    width: 63vw;
  }
`;

const styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '33px',
    height: '30px',
    top: '65px',
    right: '16px',
  },
  bmBurgerBars: {
    background: '#af0c0c',
  },
  bmBurgerBarsHover: {
    background: '#a90000',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
    top: '20px',
    right: '20px',
  },
  bmCross: {
    background: '#bdc3c7',
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '0px',
    width: '100%',
  },
  bmMenu: {
    background: '#1f1f1f',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em',
  },
  bmItem: {
    display: 'inline-block',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.3)',
  },
};

const StyledMenu = styled(Menu)`
  width: 100% !important;
`;

const Line = styled(Divider)`
  margin: 0;
`;

const LinkItem = styled(Link)`
  font-size: 1.3rem;
  &:hover {
    color: #f02020 !important;
  }
`;

const BurgerMenuWrap = styled(BurgerMenu)`
  position: relative;
`;

const Profile = styled.div`
  position: absolute;
  top: 17px;
  right: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const WrapModal = styled.div`
  margin-right: -50px;
`;

const ResponsiveHeader = () => {
  const dispatch = useDispatch();
  const profile = useSelector<RootStore, ProfileStore['profile']>((store) => store.profile.profile);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => currentUser && dispatch(setUser(currentUser)));
  }, []);
  const logout = async () => {
    try {
      await signOut(auth);
      dispatch(setUser(undefined));
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <RowWrap>
        {profile ? (
          <WrapModal>
            <Text>{profile.email}</Text>
            <Divider type="vertical" />
            <Button icon={<LogoutOutlined />} onClick={logout} type="ghost" htmlType="button">
              Log Out
            </Button>
          </WrapModal>
        ) : (
          <WrapModal>
            <LoginModal />
            <Divider type="vertical" />
            <RegisterModal />
          </WrapModal>
        )}
      </RowWrap>
      <RowWrap align="middle" justify="space-between">
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <SearchResult placeholder="Search By Movie..." />
        <BurgerMenuWrap styles={styles} right isOpen={false}>
          {profile ? (
            <Profile>
              <Text>{profile.email}</Text>
              <Divider type="vertical" />
              <Button icon={<LogoutOutlined />} onClick={logout} type="ghost" htmlType="button">
                Log Out
              </Button>
              <Divider type="vertical" />
            </Profile>
          ) : null}
          <StyledMenu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            theme="dark"
          >
            <Item key="/dashboard" icon={<AppstoreFilled />}>
              <LinkItem to="/dashboard">Dashboard</LinkItem>
            </Item>
            <Line />
            <Item key="/recent" icon={<SwapOutlined />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <LinkItem to="/recent">Recent</LinkItem>
              </Badge>
            </Item>
            <Line />
            <Item key="/discovery" icon={<FolderViewOutlined />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <LinkItem to="/discovery">Discovery</LinkItem>
              </Badge>
            </Item>
            <Line />
            <Item key="/coming-soon" icon={<DingtalkSquareFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <LinkItem to="/coming-soon">Coming Soon</LinkItem>
              </Badge>
            </Item>
            <Line />
            <Item key="/tv-show" icon={<PlayCircleFilled />} title="coming soon">
              <LinkItem to="/tv-show">Tv Show</LinkItem>
            </Item>
            <Line />
            <Item key="/library" icon={<DatabaseFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <LinkItem to="/library">Library</LinkItem>
              </Badge>
            </Item>
            <Line />
            <Item key="/my-list" icon={<StarFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <LinkItem to="/my-list">My List</LinkItem>
              </Badge>
            </Item>
            <Line />
            <Item key="/settings" icon={<SettingFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <LinkItem to="/settings">Settings</LinkItem>
              </Badge>
            </Item>
          </StyledMenu>
        </BurgerMenuWrap>
      </RowWrap>
    </Wrapper>
  );
};

export default ResponsiveHeader;
