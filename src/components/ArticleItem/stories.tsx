import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '.';

export default {
  title: 'Article Item',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />;
};

const Default = Template.bind({});
Default.args = {
  id: 1,
  date: new Date(),
  imageUrl: 'https://placeimg.com/280/180/nature',
  category: 'sport',
  title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
  preamble: 'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
};

export { Default };
