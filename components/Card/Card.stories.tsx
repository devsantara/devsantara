import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card as CardComponent } from './Card';

export default {
  title: 'Layout',
  component: CardComponent,
} as ComponentMeta<typeof CardComponent>;

const Template: ComponentStory<typeof CardComponent> = (args) => (
  <CardComponent {...args}>
    <p>Card</p>
  </CardComponent>
);

export const Card = Template.bind({});
Card.args = {
  className: '',
};
