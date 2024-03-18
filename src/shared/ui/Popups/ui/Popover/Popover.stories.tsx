import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Popover } from './Popover';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';

export default {
  title: 'shared/popups/Popover',
  component: Popover,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  trigger: 'выберите элемент',
  children: [
    'children 1',
  ],
};
Normal.decorators = [StoreDecorator({})];
