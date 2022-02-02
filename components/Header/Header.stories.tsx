import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Header as HeaderComponent } from './Header';

export default {
  title: 'Header',
  component: HeaderComponent,
} as ComponentMeta<typeof HeaderComponent>;

const Template: ComponentStory<typeof HeaderComponent> = (args) => (
  <HeaderComponent {...args} />
);

export const Header = Template.bind({});
Header.args = {};
