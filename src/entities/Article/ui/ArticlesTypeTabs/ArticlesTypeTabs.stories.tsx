import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticlesTypeTabs } from './ArticlesTypeTabs';

export default {
  title: 'entities/Article/ArticlesTypeTabs',
  component: ArticlesTypeTabs,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesTypeTabs>;

const Template: ComponentStory<typeof ArticlesTypeTabs> = (args) => <ArticlesTypeTabs {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};
