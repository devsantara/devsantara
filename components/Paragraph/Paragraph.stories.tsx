import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Paragraph as ParagraphComponent } from './Paragraph';

export default {
  title: 'Typography',
  component: ParagraphComponent,
} as ComponentMeta<typeof ParagraphComponent>;

const Template: ComponentStory<typeof ParagraphComponent> = (args) => (
  <ParagraphComponent {...args}>
    Pelajari keterampilan yang sangat dibutuhkan, dan berjumpa dengan teman
    hingga mentor yang berpengalaman di bidangnya
  </ParagraphComponent>
);

export const Paragraph = Template.bind({});
Paragraph.args = {};
