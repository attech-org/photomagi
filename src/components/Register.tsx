import { Button, Input, Modal, Form } from 'antd';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import styled from 'styled-components';

import { auth } from '../firebase/firebase-config';

const StyledRegisterModal = styled(Modal)``;
const RegisterButton = styled(Button)`
  background-color: #1f1f1f;
  border: none;
  &:hover {
    background-color: #177ddc;
  }
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
const RegisterModal: React.FunctionComponent = () => {
  const [visibleRegister, setVisibleRegister] = useState(false);

  const onFinish = async (values: OnFinish) => {
    try {
      await createUserWithEmailAndPassword(auth, values.Email, values.password);
      setVisibleRegister(false);
    } catch (error: unknown) {
      console.error(error);
    }
  };

  const showModalRegister = () => {
    setVisibleRegister(true);
  };

  const handleCancelRegister = () => {
    setVisibleRegister(false);
  };
  return (
    <>
      <RegisterButton type="primary" onClick={showModalRegister}>
        Register
      </RegisterButton>
      <StyledRegisterModal
        title="Sign In"
        visible={visibleRegister}
        onCancel={handleCancelRegister}
        footer={null}
      >
        <Form
          name="RegisterForm"
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
              Register Now
            </Button>
          </Form.Item>
        </Form>
      </StyledRegisterModal>
    </>
  );
};

export default RegisterModal;
