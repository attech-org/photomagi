import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Input, Button, Divider, Typography } from 'antd';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoginModal from '../components/Login';
import RegisterModal from '../components/Register';
import { auth } from '../firebase/firebase-config';
import { setUser } from '../redux/profile/actions';
import { ProfileStore } from '../redux/profile/reducer';
import { RootStore } from '../redux/store';
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
    padding: 1rem;
    min-height: 114px;
    align-items: flex-start;
    line-height: 0;
  }
`;

const SearchResult = styled(Search)`
  width: 30vw;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const Profile = styled.div`
  margin-left: auto;
  @media screen and (max-width: 576px) {
    display: none;
  }
`;

const LayoutWrapper: React.FC = ({ children }) => {
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
    <Layout>
      <Sidebar />
      <Layout>
        <StyledHeader>
          <SearchResult placeholder="Search By Movie..." />
          {profile ? (
            <Profile>
              <Link to="profile">
                <Text>{profile.email}</Text>
              </Link>

              <Divider type="vertical" />
              <Button icon={<LogoutOutlined />} onClick={logout} type="ghost" htmlType="button">
                Log Out
              </Button>
            </Profile>
          ) : (
            <Profile>
              <LoginModal title="Log In" />
              <Divider type="vertical" />
              <RegisterModal />
            </Profile>
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
