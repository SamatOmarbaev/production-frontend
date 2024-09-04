import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Code } from './Code';

export default {
  title: 'shared/Code',
  component: Code,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  text: `
   export const Code = memo((props: CodeProps) => {
      const { className, children } = props;
    
      return (
        <pre>
          <code className={classNames(styles.Code, {}, [className])}>
            {children}
          </code>
        </pre>
      );
   });
   `,
};
