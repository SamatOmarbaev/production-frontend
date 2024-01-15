import { ComponentStory, ComponentMeta } from '@storybook/react';
import ArticlesDetailPage from './ArticlesDetailPage';

export default {
  title: 'pages/ArticlesDetailPage',
  component: ArticlesDetailPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesDetailPage>;

const Template: ComponentStory<typeof ArticlesDetailPage> = () => <ArticlesDetailPage />;

export const Normal = Template.bind({});
Normal.args = {};
