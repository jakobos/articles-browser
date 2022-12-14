import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Component from '.';

export default {
  title: 'Filters',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />;
};

const Default = Template.bind({});
Default.args = {
  title: 'Data Sources',
  filters: [
    {
      name: 'Sports',
      enabled: false,
    },
    {
      name: 'Fashion',
      enabled: false,
    },
  ],
  handleFiltersChange: (name: string, checked: boolean) => {},
};

export { Default };
