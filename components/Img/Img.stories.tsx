import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Img as ImgComponent } from './Img';

export default {
  title: 'Image',
  component: ImgComponent,
} as ComponentMeta<typeof ImgComponent>;

const Template: ComponentStory<typeof ImgComponent> = (args) => (
  <ImgComponent {...args} />
);

export const Img = Template.bind({});
Img.args = {
  src: '/brand/devsantara-logo.svg',
  alt: 'devsantara',
  href: '/',
  className: 'h-9 w-9',
};
