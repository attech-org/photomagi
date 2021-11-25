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
import { Divider, Input, Menu, Row } from 'antd';
import { slide as BurgerMenu } from 'react-burger-menu';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/img/logo.png';

const { Item } = Menu;
const { Search } = Input;

const RowWrap = styled(Row)`
  display: none;
  @media screen and (max-width: 576px) {
    display: inline-flex;
  }
`;

const Logo = styled.img`
  display: block;
  width: 32px;
    &:hover {
      opacity: .75;
    }
`;

const SearchResult = styled(Search)`
  width: 77vw;
  margin: 0 1rem;
  @media screen and (max-width: 530px) {
    width: 74vw;
  }
  @media screen and (max-width: 490px) {
    width: 71vw;
  }
  @media screen and (max-width: 450px) {
    width: 68vw;
  }
  @media screen and (max-width: 400px) {
    width: 60vw;
  }
`;

const styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '33px',
    height: '30px',
    top: '18px',
    right: '17px',
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
  },
  bmCross: {
    background: '#bdc3c7',
    hover: {
      background: 'red',
    },
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
  &:hover {
    color: #f02020 !important;
  }
`;

const ResponsiveHeader = () => {
  const onSearch = (value: string) => console.log(value);

  return (
    <RowWrap align="middle" justify="space-between">
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <SearchResult placeholder="Search By Movie..." onSearch={onSearch} />
      <BurgerMenu styles={styles} right>
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
          <Item key="/recent" icon={<SwapOutlined />}>
            <LinkItem to="/recent">Recent</LinkItem>
          </Item>
          <Line />
          <Item key="/discovery" icon={<FolderViewOutlined />}>
            <LinkItem to="/discovery">Discovery</LinkItem>
          </Item>
          <Line />
          <Item key="/coming-soon" icon={<DingtalkSquareFilled />}>
            <LinkItem to="/coming-soon">Coming Soon</LinkItem>
          </Item>
          <Line />
          <Item key="/tv-show" icon={<PlayCircleFilled />}>
            <LinkItem to="/tv-show">Tv Show</LinkItem>
          </Item>
          <Line />
          <Item key="/library" icon={<DatabaseFilled />}>
            <LinkItem to="/library">Library</LinkItem>
          </Item>
          <Line />
          <Item key="/my-list" icon={<StarFilled />}>
            <LinkItem to="/my-list">My List</LinkItem>
          </Item>
          <Line />
          <Item key="/settings" icon={<SettingFilled />}>
            <LinkItem to="/settings">Settings</LinkItem>
          </Item>
          <Line />
          <Item key="/dashboard" icon={<LogoutOutlined />}>
            <LinkItem to="/dashboard">Log Out</LinkItem>
          </Item>
        </StyledMenu>
      </BurgerMenu>
    </RowWrap>
  );
};

export default ResponsiveHeader;
