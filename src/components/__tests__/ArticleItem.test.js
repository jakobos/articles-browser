import React from 'react';
import { shallow } from 'enzyme';
import ArticleItem, { Img } from '../ArticleItem/index';

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
  expect(wrapped.find(Img).length).toEqual(1);
});

it('has title', () => {
  expect(wrapped.find('[variant="subtitle1"]').length).toEqual(1);
});

it('has preamble', () => {
  expect(wrapped.find('[variant="body2"]').length).toEqual(1);
});

it('has date', () => {
  expect(wrapped.find('[variant="subtitle2"]').length).toEqual(1);
});
