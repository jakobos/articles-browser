import React from 'react';
import { shallow } from 'enzyme';
import Filters from '../Sorting/index';
import { TestId, SortMode, SortObject } from '../Sorting/types';
import { testIdRule } from '../../utils/constants';

const mockProps = {
  sortObject: SortObject.Date,
  mode: SortMode.Ascending,
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

it('has icon', () => {
  expect(wrapped.find(testIdRule(TestId.Icon)).length).toEqual(1);
});
