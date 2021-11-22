import { Layout } from 'antd';
import styled from 'styled-components';

import Sidebar from './Sidebar';

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
`;

const LayoutWrapper: React.FunctionComponent = ({ children }) => (
  <Layout hasSider>
    <Sidebar />
    <Layout.Content>
      <StyledMain>{children}</StyledMain>
    </Layout.Content>
  </Layout>
);

export default LayoutWrapper;
