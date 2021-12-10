import { Button, Form, Input, Modal } from 'antd';
import { User } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { updateUserAsync } from '../redux/profile/actions';

const initialValues: Partial<User> = {};
export interface ProfileContainerProps {
  profile?: Partial<User>;
}

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
    console.log(values);
    dispatch(
      updateUserAsync({
        displayName: values.displayName,
        email: values.email,
        phoneNumber: values.phoneNumber,
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
          initialValues={{ ...initialValues, profile }}
          onFinish={handleSubmitForm}
        >
          <Form.Item
            label={profile?.displayName}
            name="displayName"
            // rules={[formRules.required]}
          >
            <Input placeholder="Name" />
          </Form.Item>
          <Form.Item
            label={profile?.email}
            name="email"
            // rules={[formRules.required]}
          >
            <Input placeholder="Email" />
          </Form.Item>

          <Form.Item
            label={profile?.displayName}
            name="phoneNumber"
            // rules={[formRules.required]}
          >
            <Input placeholder="Phone number" />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </>
  );
};

export default ProfileContainer;
