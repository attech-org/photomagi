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
import { Layout, Menu } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/img/logo.png';

const { Item, ItemGroup } = Menu;

const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

const Sidebar: React.FC = () => {
  const [isCollapsed, onCollapsedChange] = useState(false);
  return (
    <Layout.Sider
      breakpoint="md"
      collapsible
      collapsed={isCollapsed}
      onCollapse={onCollapsedChange}
    >
      <Link to="/">
        <Logo src={logo} />
      </Link>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <ItemGroup key="g1" title="MENU">
          <Item key="1" icon={<AppstoreFilled />}>
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item key="2" icon={<SwapOutlined />}>
            <Link to="/recent">Recent</Link>
          </Item>
          <Item key="3" icon={<FolderViewOutlined />}>
            <Link to="/discovery">Discovery</Link>
          </Item>
          <Item key="4" icon={<DingtalkSquareFilled />}>
            <Link to="/coming-soon">Coming Soon</Link>
          </Item>
          <Item key="5" icon={<PlayCircleFilled />}>
            <Link to="/tv-show">Tv Show</Link>
          </Item>
        </ItemGroup>
        <ItemGroup key="g2" title="LIBRARY">
          <Item key="6" icon={<DatabaseFilled />}>
            <Link to="/library">Library</Link>
          </Item>
          <Item key="7" icon={<StarFilled />}>
            <Link to="/my-list">My List</Link>
          </Item>
        </ItemGroup>
        <ItemGroup key="g3" title="GENERAL">
          <Item key="8" icon={<SettingFilled />}>
            <Link to="/settings">Settings</Link>
          </Item>
          <Item key="9" icon={<LogoutOutlined />}>
            <Link to="/dashboard">Log Out</Link>
          </Item>
        </ItemGroup>
      </Menu>
    </Layout.Sider>
  );
};

export default Sidebar;
