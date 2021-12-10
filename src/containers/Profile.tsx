import { Button, Form, Input, Modal } from 'antd';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { updateUserAsync } from '../redux/profile/actions';

const initialValues: Partial<User> = {};
export interface ProfileContainerProps {
  profile?: User;
}

const Wrapper = styled.div`
  padding: 2em 4em;
`;

const ProfileContainer: React.FunctionComponent<ProfileContainerProps> = ({ profile }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileForm] = Form.useForm<Partial<User>>();

  useEffect(
    () => () => {
      profileForm.resetFields();
    },
    [],
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmitForm = (values: Partial<User>) => {
    dispatch(
      updateUserAsync({
        displayName: values.displayName,
        email: values.email,
      }),
    );
    setIsModalVisible(false);
  };
  return (
    <Wrapper>
      <p>Name: {profile?.displayName}</p>
      <Button size="small" ghost onClick={showModal}>
        Edit
      </Button>
      <Modal
        title="Personal information"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          name="Personal information"
          form={profileForm}
          layout="vertical"
          initialValues={{ ...initialValues, ...profile }}
          onFinish={handleSubmitForm}
        >
          <Form.Item label="Name:" name="displayName">
            <Input placeholder="Name" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </Wrapper>
  );
};

export default ProfileContainer;
