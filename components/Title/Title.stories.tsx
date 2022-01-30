import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Title as TitleComponent } from './Title';

export default {
  title: 'Typography',
  component: TitleComponent,
} as ComponentMeta<typeof TitleComponent>;

const Template: ComponentStory<typeof TitleComponent> = (args) => (
  <TitleComponent {...args}>
    TEMPAT <span className="text-primary">BELAJAR</span> DAN{' '}
    <span className="text-primary">BERKOMUNITAS</span> BAGI{' '}
    <span className="text-primary">DEVELOPER INDONESIA</span>
  </TitleComponent>
);

export const Title = Template.bind({});
Title.args = {
  children: '',
};
