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
import { Badge, Col, Layout, Menu, Row } from 'antd';
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

const Sider = styled(Layout.Sider)`
  height: 100%;
  min-height: 100vh;
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
    display: ${(props) => (props.className === 'true' ? 'none' : 'initial')};
  }
`;

const Sidebar: React.FC = () => {
  const location = useLocation();

  const [isCollapsed, onCollapsedChange] = useState(false);

  return (
    <NormalSider>
      <Sider collapsible collapsed={isCollapsed} onCollapse={onCollapsedChange} collapsedWidth={50}>
        <Row>
          <Col>
            <Link to="/">
              <Logo src={logo} />
            </Link>
          </Col>
        </Row>
        <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline">
          <ItemGroupStld className={isCollapsed.toString()} key="g1" title="MENU">
            <Item key="/dashboard" icon={<AppstoreFilled />}>
              <Link to="/dashboard">Dashboard</Link>
            </Item>
            <Item key="/recent" icon={<SwapOutlined />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/recent">Recent</Link>
              </Badge>
            </Item>
            <Item key="/discovery" icon={<FolderViewOutlined />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/discovery">Discovery</Link>
              </Badge>
            </Item>
            <Item key="/coming-soon" icon={<DingtalkSquareFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/coming-soon">Coming Soon</Link>
              </Badge>
            </Item>
            <Item key="/tv-show" icon={<PlayCircleFilled />} title="coming soon">
              <Link to="/tv-show">Tv Show</Link>
            </Item>
          </ItemGroupStld>
          <ItemGroupStld className={isCollapsed.toString()} key="g2" title="LIBRARY">
            <Item key="/library" icon={<DatabaseFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/library">Library</Link>
              </Badge>
            </Item>
            <Item key="/my-list" icon={<StarFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/my-list">My List</Link>
              </Badge>
            </Item>
          </ItemGroupStld>
          <ItemGroupStld className={isCollapsed.toString()} key="g3" title="GENERAL">
            <Item key="/settings" icon={<SettingFilled />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/settings">Settings</Link>
              </Badge>
            </Item>
            <Item key="/logout" icon={<LogoutOutlined />} disabled title="coming soon">
              <Badge size="small" count="soon" color="red" offset={[5, 7]}>
                <Link to="/logout">Log Out</Link>
              </Badge>
            </Item>
          </ItemGroupStld>
        </Menu>
      </Sider>
    </NormalSider>
  );
};

export default Sidebar;
