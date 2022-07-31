import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '.';

export default {
  title: 'Articles List',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />;
};

const Default = Template.bind({});
Default.args = {
  data: [
    {
      id: 789702,
      date: new Date(2019, 5, 10),
      imageUrl: 'https://placeimg.com/280/180/nature',
      category: 'sport',
      title: 'Vålerengas førsterekke smadrer rivalene: - Seriegullet er I våre hender',
      preamble:
        'MERÅKER (VG) Finn-Hågen Krogh (28) opplevde den gedigne nedturen da han ble vraket til OL-sprinten i Sotsji etter at han først var tatt ut på laget. Nå føler han seg aldri trygg på å få starte i mesterskap.',
    },
    {
      id: 123544,
      date: new Date(2018, 8, 10),
      imageUrl: 'https://placeimg.com/280/180/nature',
      category: 'sport',
      title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
      preamble:
        'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
    },
  ],
};

export { Default };
