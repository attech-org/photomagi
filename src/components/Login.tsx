import { Button, Input, Modal, Form } from 'antd';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';

import { auth } from '../firebase/firebase-config';

const LogInModal = styled(Modal)``;
const LoginButton = styled(Button)`
  background-color: #1f1f1f;
  border: none;
  &:hover {
    background-color: #177ddc;
  }
  @media screen and (max-width: 576px) {
    background-color: transparent;
  }
`;
interface OnFinish {
  Email: string;
  password: string;
}
const LoginModal: React.FunctionComponent = () => {
  const [visibleLogin, setVisibleLogin] = useState(false);

  const onFinish = async (values: OnFinish) => {
    try {
      await signInWithEmailAndPassword(auth, values.Email, values.password);
      setVisibleLogin(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const showModalLogin = () => {
    setVisibleLogin(true);
  };

  const handleCancelLogin = () => {
    setVisibleLogin(false);
  };
  return (
    <>
      <LoginButton type="primary" onClick={() => showModalLogin()}>
        Log In
      </LoginButton>
      <LogInModal title="Log In" visible={visibleLogin} onCancel={handleCancelLogin} footer={null}>
        <Form
          name="LoginForm"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            label="Email"
            name="Email"
            rules={[{ required: true, message: 'Please input your Email!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 9, span: 15 }}>
            <Button type="primary" htmlType="submit">
              Log In
            </Button>
          </Form.Item>
        </Form>
      </LogInModal>
    </>
  );
};

export default LoginModal;
