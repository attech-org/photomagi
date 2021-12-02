import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Input, Button, Divider, Typography } from 'antd';
import { signOut, onAuthStateChanged, User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

import LoginModal from '../components/Login';
import RegisterModal from '../components/Register';
import { auth } from '../firebase/firebase-config';
import ResponsiveHeader from './ResponsiveHeader';
import Sidebar from './Sidebar';

const { Content } = Layout;
const { Search } = Input;
const { Text } = Typography;

const StyledHeader = styled(Layout.Header)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  @media screen and (max-width: 576px) {
    padding: 0.75rem 1rem;
  }
`;

const SearchResult = styled(Search)`
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const LayoutWrapper: React.FC = ({ children }) => {
  const [currentUserState, setCurrentUserState] = useState<User>();
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => currentUser && setCurrentUserState(currentUser));
  }, []);

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUserState(undefined);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <Sidebar />
      <Layout>
        <StyledHeader>
          <SearchResult placeholder="Search By Movie..." style={{ width: 450 }} />
          {currentUserState ? (
            <div>
              <Text>{currentUserState?.email}</Text>
              <Divider type="vertical" />
              <Button icon={<LogoutOutlined />} onClick={logout} type="ghost" htmlType="button">
                Log Out
              </Button>
            </div>
          ) : (
            <div>
              <LoginModal />
              <Divider type="vertical" />
              <RegisterModal />
            </div>
          )}
          <ResponsiveHeader />
        </StyledHeader>
        <Content>{children}</Content>
        <Layout.Footer>Footer</Layout.Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutWrapper;
