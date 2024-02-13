import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  initialValue: 'выберите элемент',
  items: [
    { value: '1', content: '123', disabled: true },
    { value: '2', content: 'sadsa', disabled: false },
    { value: '3', content: '1gdsfga23', disabled: false },
    { value: '4', content: 'asg', disabled: true },
  ],
  defaulValue: 'выберите элемент',
};
Normal.decorators = [StoreDecorator({})];
