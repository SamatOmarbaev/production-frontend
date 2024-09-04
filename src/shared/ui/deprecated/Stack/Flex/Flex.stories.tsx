import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'shared/Flex',
  component: Flex,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div>fdsf</div>
      <div>sdfsdf</div>
      <div>sdfsd</div>
    </>
  ),
};

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
  children: (
    <>
      <div>fdsf</div>
      <div>sdfsdf</div>
      <div>sdfsd</div>
    </>
  ),
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
  children: (
    <>
      <div>fdsf</div>
      <div>sdfsdf</div>
      <div>sdfsd</div>
    </>
  ),
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
  children: (
    <>
      <div>fdsf</div>
      <div>sdfsdf</div>
      <div>sdfsd</div>
    </>
  ),
};

export const ColumnGap8 = Template.bind({});
ColumnGap8.args = {
  direction: 'column',
  gap: '8',
  children: (
    <>
      <div>fdsf</div>
      <div>sdfsdf</div>
      <div>sdfsd</div>
    </>
  ),
};

export const ColumnGap32 = Template.bind({});
ColumnGap32.args = {
  direction: 'column',
  gap: '32',
  children: (
    <>
      <div>fdsf</div>
      <div>sdfsdf</div>
      <div>sdfsd</div>
    </>
  ),
};
