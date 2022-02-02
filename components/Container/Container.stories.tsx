import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container as ContainerComponent } from './Container';

export default {
  title: 'Layout',
  component: ContainerComponent,
} as ComponentMeta<typeof ContainerComponent>;

const Template: ComponentStory<typeof ContainerComponent> = (args) => (
  <ContainerComponent {...args}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam modi cum,
    doloribus temporibus quis doloremque veniam rerum tempore nulla impedit
    optio maiores necessitatibus rem, delectus quibusdam dolorem ut nisi
    assumenda? Necessitatibus magni ea consequatur deserunt nostrum nobis
    ducimus facilis rerum repudiandae expedita sit ex excepturi vero ut quas
    nesciunt itaque perspiciatis officiis dicta cupiditate dolores, veritatis
    obcaecati a. Ipsum, commodi. Repudiandae, totam incidunt vel molestiae
    similique illo voluptate unde eos libero suscipit veniam magni, obcaecati
    illum iusto delectus cum rerum officia esse nihil earum laboriosam? Quo
    labore nam nisi accusamus! Commodi dolores fugiat tenetur aut enim quaerat
    est ea voluptatem atque voluptates magni odit, beatae repellat sint
    molestiae voluptas, reiciendis perferendis distinctio minus quisquam, id
    deleniti? Soluta veritatis ullam officia.
  </ContainerComponent>
);

export const Container = Template.bind({});
Container.args = {};
