import { Layout, Input } from 'antd';
import styled from 'styled-components';

import ResponsiveHeader from './ResponsiveHeader';
import Sidebar from './Sidebar';

const { Search } = Input;

const StyledHeader = styled(Layout.Header)`
  padding: 1rem;
  @media screen and (max-width: 576px) {
    padding: 0.75rem 1rem;
  }
`;

const SearchResult = styled(Search)`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const LayoutWrapper: React.FunctionComponent = ({ children }) => (
  <Layout>
    <Sidebar />
    <Layout>
      <StyledHeader>
        <SearchResult placeholder="Search By Movie..." style={{ width: 450 }} />
        <ResponsiveHeader />
      </StyledHeader>
      <Layout.Content>{children}</Layout.Content>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  </Layout>
);

export default LayoutWrapper;
