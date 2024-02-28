import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Notificationlist } from './Notificationlist';

export default {
  title: 'entities/Notificationlist',
  component: Notificationlist,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Notificationlist>;

const Template: ComponentStory<typeof Notificationlist> = (args) => <Notificationlist {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
Normal.decorators = [StoreDecorator({})];
