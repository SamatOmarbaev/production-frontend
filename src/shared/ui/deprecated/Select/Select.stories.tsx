import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Select } from './Select';
import { Theme } from '@/shared/const/theme';

export default {
  title: 'shared/Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
  },
} as ComponentMeta<typeof Select>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Укажите значение',
  options: [
    { value: '123', content: 'First' },
    { value: '1233', content: 'Second' },
    { value: '123434', content: 'Third' },
  ],
};

export const Orange = Template.bind({});
Orange.args = {
  label: 'Укажите значение',
  options: [
    { value: '123', content: 'First' },
    { value: '1233', content: 'Second' },
    { value: '123434', content: 'Third' },
  ],
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
