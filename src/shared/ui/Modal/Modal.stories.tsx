import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
  title: 'shared/Modal',
  component: Modal,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Modal>;

/* eslint-disable react/jsx-props-no-spreading */
const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus praesentium quae commodi, at ex, fugit atque a consequaturtempora veritatis sapiente tempore aspernatur sed consectetur accusantiumlaboriosam perspiciatis eius rerum!',
};

export const Dark = Template.bind({});
Dark.args = {
  isOpen: true,
  children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Minus praesentium quae commodi, at ex, fugit atque a consequaturtempora veritatis sapiente tempore aspernatur sed consectetur accusantiumlaboriosam perspiciatis eius rerum!',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
