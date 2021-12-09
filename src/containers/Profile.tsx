import { Button, Form, Input, Modal } from 'antd';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateUserProfile } from '../redux/profile/actions';

export interface ProfileContainerProps {
  profile?: User;
}

const ProfileContainer: React.FunctionComponent<ProfileContainerProps> = ({ profile }) => {
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileForm] = Form.useForm<ProfileContainerProps>();
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
  const handleSubmitForm = (values: ProfileContainerProps) => {
    console.log(values);
    dispatch(
      updateUserProfile({
        displayName: values?.profile?.displayName,
        email: values?.profile?.email,
      }),
    );
    setIsModalVisible(false);
  };
  return (
    <>
      <img src={profile?.photoURL?.toString()} alt="avatar" />
      <div>Name: {profile?.displayName}</div>
      <div>E-mail: {profile?.email}</div>
      <div>Phone number: {profile?.phoneNumber}</div>
      <button type="button" onClick={showModal}>
        Edit
      </button>
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
          initialValues={{ ...profile }}
          onFinish={handleSubmitForm}
        >
          <Form.Item
            label={profile?.email}
            name="email"
            // rules={[formRules.required]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label={profile?.displayName}
            name="name"
            // rules={[formRules.required]}
          >
            <Input placeholder="Name" />
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default ProfileContainer;
