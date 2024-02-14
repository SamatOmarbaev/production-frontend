import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => <div style={{ padding: 100 }}><Story /></div>,
  ],
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

export const TopLeft = Template.bind({});
TopLeft.args = {
  direction: 'top left',
  initialValue: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const TopRight = Template.bind({});
TopRight.args = {
  direction: 'top right',
  initialValue: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const BottomLeft = Template.bind({});
BottomLeft.args = {
  direction: 'bottom left',
  initialValue: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};

export const BottomRight = Template.bind({});
BottomRight.args = {
  direction: 'bottom right',
  initialValue: '123',
  items: [
    { content: '1asfasfasf23', value: '123' },
    { content: '1asfasfasf21233', value: '1232' },
  ],
};
