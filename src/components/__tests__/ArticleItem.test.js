import React from 'react';
import { shallow } from 'enzyme';
import ArticleItem, { Img } from '../ArticleItem/index';
import { testIdRule } from '../../utils/constants';
import { TestId } from '../ArticleItem/types';

const mockProps = {
  id: '1',
  date: '2. februar 2019',
  imageUrl: 'https://placeimg.com/280/180/nature',
  category: 'sport',
  title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
  preamble: 'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
};

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ArticleItem {...mockProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('has image', () => {
  expect(wrapped.find(testIdRule(TestId.Image)).length).toEqual(1);
});

it('has title', () => {
  expect(wrapped.find(testIdRule(TestId.Title)).length).toEqual(1);
});

it('has preamble', () => {
  expect(wrapped.find(testIdRule(TestId.Preamble)).length).toEqual(1);
});

it('has date', () => {
  expect(wrapped.find(testIdRule(TestId.Date)).length).toEqual(2);
});
