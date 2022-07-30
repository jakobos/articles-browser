import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { SortMode, SortObject } from './types';
import Component from '.';

export default {
  title: 'Sorting',
  component: Component,
} as ComponentMeta<typeof Component>;

const Template: ComponentStory<typeof Component> = (args) => {
  return <Component {...args} />;
};

const Default = Template.bind({});
Default.args = {
  sortObject: SortObject.Date,
  mode: SortMode.Ascending,
};

export { Default };
