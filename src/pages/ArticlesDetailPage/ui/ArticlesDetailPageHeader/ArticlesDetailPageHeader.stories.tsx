import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ArticlesDetailPageHeader } from './ArticlesDetailPageHeader';

export default {
  title: 'pages/ArticlesDetailPage/ArticlesDetailPageHeader',
  component: ArticlesDetailPageHeader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesDetailPageHeader>;

const Template: ComponentStory<typeof ArticlesDetailPageHeader> = (args) => <ArticlesDetailPageHeader {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
