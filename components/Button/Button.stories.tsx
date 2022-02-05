import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button as ButtonComponent } from './Button';

export default {
  title: 'Buttons',
  component: ButtonComponent,
} as ComponentMeta<typeof ButtonComponent>;

const Template: ComponentStory<typeof ButtonComponent> = (args) => (
  <ButtonComponent {...args}>Button</ButtonComponent>
);

export const Default = Template.bind({});
Default.args = {
  // href: '',
  className: 'bg-primary text-white text-left',
  rounded: false,
  // target: '_self',
  onClick: () => {},
};
