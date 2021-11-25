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
import { Col, Layout, Menu, Row } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import logo from '../assets/img/logo.png';

const { Item } = Menu;

const NormalSider = styled.div`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const Logo = styled.img`
  display: block;
  width: 35%;
  margin: 15% auto 10%;
`;

const ItemGroupStld = styled(Menu.ItemGroup)`
  .ant-menu-item-group-title {
    color: #ffffff;
    font-weight: 500;
  }
`;

const Sidebar: React.FC = () => {
  const location = useLocation();

  const [isCollapsed, onCollapsedChange] = useState(false);

  return (
    <NormalSider>
      <Layout.Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={onCollapsedChange}
        collapsedWidth={50}
      >
        <Row>
          <Col>
            <Link to="/">
              <Logo src={logo} />
            </Link>
          </Col>
        </Row>
        <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
          <ItemGroupStld key="g1" title="MENU">
            <Item key="/dashboard" icon={<AppstoreFilled />}>
              <Link to="/dashboard">Dashboard</Link>
            </Item>
            <Item key="/recent" icon={<SwapOutlined />}>
              <Link to="/recent">Recent</Link>
            </Item>
            <Item key="/discovery" icon={<FolderViewOutlined />}>
              <Link to="/discovery">Discovery</Link>
            </Item>
            <Item key="/coming-soon" icon={<DingtalkSquareFilled />}>
              <Link to="/coming-soon">Coming Soon</Link>
            </Item>
            <Item key="/tv-show" icon={<PlayCircleFilled />}>
              <Link to="/tv-show">Tv Show</Link>
            </Item>
          </ItemGroupStld>
          <ItemGroupStld key="g2" title="LIBRARY">
            <Item key="/library" icon={<DatabaseFilled />}>
              <Link to="/library">Library</Link>
            </Item>
            <Item key="/my-list" icon={<StarFilled />}>
              <Link to="/my-list">My List</Link>
            </Item>
          </ItemGroupStld>
          <ItemGroupStld key="g3" title="GENERAL">
            <Item key="/settings" icon={<SettingFilled />}>
              <Link to="/settings">Settings</Link>
            </Item>
            <Item key="/dashboard" icon={<LogoutOutlined />}>
              <Link to="/dashboard">Log Out</Link>
            </Item>
          </ItemGroupStld>
        </Menu>
      </Layout.Sider>
    </NormalSider>
  );
};

export default Sidebar;
