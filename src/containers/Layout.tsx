import { Layout } from 'antd';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
`;

const LayoutWrapper: React.FunctionComponent = ({ children }) => {
  const [isCollapsed, onCollapsedChange] = useState(false);
  return (
    <Layout>
      <Layout.Sider
        breakpoint="md"
        collapsible
        collapsed={isCollapsed}
        onCollapse={onCollapsedChange}
      >
        <Link to="/">Landing page</Link>
        <Link to="/dashboard">Dashboard</Link>
      </Layout.Sider>

      <Layout.Content>
        <StyledMain>{children}</StyledMain>
      </Layout.Content>
    </Layout>
  );
};

export default LayoutWrapper;
