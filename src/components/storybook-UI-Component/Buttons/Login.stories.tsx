import { ComponentStory, ComponentMeta } from '@storybook/react';

import LoginModal from '../../Login';

export default {
  title: 'StoryBook-UI-Conponent/Buttons',
  component: LoginModal,
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => <LoginModal {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: 'Log In',
};
