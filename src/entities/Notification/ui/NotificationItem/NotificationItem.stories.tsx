import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NotificationItem } from './NotificationItem';

export default {
  title: 'entities/Notification/NotificationItem',
  component: NotificationItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  item: {
    id: '1',
    title: 'NotificationItem 1',
    description: 'About NotificationItem 1',
  },
};

export const Href = Template.bind({});
Href.args = {
  item: {
    id: '2',
    title: 'NotificationItem 2',
    description: 'About NotificationItem 2',
    href: 'asdasd',
  },
};
