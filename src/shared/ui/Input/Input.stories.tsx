import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Input>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type Text',
  value: '123123',
};

export const Dark = Template.bind({});
Dark.args = {
  placeholder: 'Type Text',
  value: '123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Orange = Template.bind({});
Orange.args = {
  placeholder: 'Type Text',
  value: '123123',
};
Orange.decorators = [ThemeDecorator(Theme.ORANGE)];
