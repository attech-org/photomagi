import { LogoutOutlined } from '@ant-design/icons';
import { Layout, Input, Modal, Button, Form, Divider, Typography } from 'antd';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';

import { auth } from '../firebase/firebase-config';
import ResponsiveHeader from './ResponsiveHeader';
import Sidebar from './Sidebar';

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

const SignButton = styled(Button)`
  background-color: #1f1f1f;
  border: none;
  &:hover {
    background-color: #177ddc;
  }
`;

const LoginButton = styled(Button)`
  background-color: #1f1f1f;
  border: none;
  &:hover {
    background-color: #177ddc;
  }
`;

const Content = styled(Layout.Content)``;

const LogInModal = styled(Modal)``;

const SignInModal = styled(Modal)``;

const LayoutWrapper: React.FC = ({ children }) => {
  // Modal Form Visible State
  const [visibleLogin, setVisibleLogin] = useState(false);
  const [visibleRegister, setVisibleRegister] = useState(false);

  // Form Input onChange State
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  // CurrentUser State
  const [currentUserState, setCurrentUserState] = useState<User>();

  onAuthStateChanged(auth, (currentUser) => currentUser && setCurrentUserState(currentUser));

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, registerEmail, registerPassword);
      setVisibleRegister(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
      setVisibleLogin(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setCurrentUserState(undefined);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  /* Login Show Modal and Form */

  const showModalLogin = () => {
    setVisibleLogin(true);
  };

  const handleCancelLogin = () => {
    setVisibleLogin(false);
  };

  /* End Login Show Modal and Form */

  /* Register Show Modal and Form */

  const showModalRegister = () => {
    setVisibleRegister(true);
  };

  const handleCancelRegister = () => {
    setVisibleRegister(false);
  };

  /* End Register Show Modal and Form */

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
              <LoginButton type="primary" onClick={showModalLogin}>
                Log In
              </LoginButton>
              <Divider type="vertical" />
              <SignButton type="primary" onClick={showModalRegister}>
                Register
              </SignButton>
              <LogInModal
                title="Log In"
                visible={visibleLogin}
                onCancel={handleCancelLogin}
                footer={null}
              >
                <Form
                  name="LoginForm"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                  >
                    <Input onChange={(e) => setLoginEmail(e.target.value)} />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password onChange={(e) => setLoginPassword(e.target.value)} />
                  </Form.Item>
                  <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                    <Button onClick={login} type="primary" htmlType="submit">
                      Log In
                    </Button>
                  </Form.Item>
                </Form>
              </LogInModal>
              <SignInModal
                title="Sign In"
                visible={visibleRegister}
                onCancel={handleCancelRegister}
                footer={null}
              >
                <Form
                  name="SigninForm"
                  labelCol={{ span: 6 }}
                  wrapperCol={{ span: 16 }}
                  initialValues={{ remember: true }}
                  autoComplete="off"
                >
                  <Form.Item
                    label="Email"
                    name="Email"
                    rules={[{ required: true, message: 'Please input your Email!' }]}
                  >
                    <Input onChange={(e) => setRegisterEmail(e.target.value)} />
                  </Form.Item>

                  <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                  >
                    <Input.Password onChange={(e) => setRegisterPassword(e.target.value)} />
                  </Form.Item>

                  <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
                    <Button onClick={register} type="primary" htmlType="submit">
                      Register Now
                    </Button>
                  </Form.Item>
                </Form>
              </SignInModal>
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
