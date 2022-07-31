import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../Filters/index';
import { TestId } from '../Filters/types';
import { testIdRule } from '../../utils/constants';

const mockProps = {
  title: 'Data Sources',
  filters: [
    {
      name: 'Sport',
      enabled: false,
    },
    {
      name: 'Fashion',
      enabled: false,
    },
  ],
};

let wrapped;

beforeEach(() => {
  wrapped = shallow(<Filters {...mockProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has title', () => {
  expect(wrapped.find(testIdRule(TestId.Title)).length).toEqual(1);
});

it('has filters', () => {
  expect(wrapped.find(testIdRule(TestId.Filters)).length).toEqual(1);
});

it('has sport filter', () => {
  expect(wrapped.find(testIdRule(TestId.FilterSport)).length).toEqual(1);
});

it('has fashion filter', () => {
  expect(wrapped.find(testIdRule(TestId.FilterFashion)).length).toEqual(1);
});
