import React from 'react';
import { shallow } from 'enzyme';
import ArticlesList from '../ArticlesList';
import { testIdRule } from '../../utils/constants';
import { TestId } from '../ArticlesList/types';

const mockProps = {
  data: [
    {
      id: '1',
      date: '2. februar 2019',
      imageUrl: 'https://placeimg.com/280/180/nature',
      category: 'sport',
      title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
      preamble:
        'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
    },
    {
      id: '2',
      date: '6. februar 2019',
      imageUrl: 'https://placeimg.com/280/180/nature',
      category: 'sport',
      title: 'Solskjær fikk klar beskjed fra Røkke og Gjelsten: – Ikke kom tilbake!',
      preamble:
        'Ole Gunnar Solskjær forteller om den spesielle samtalen med de to Molde-investorene.',
    },
  ],
};

let wrapped;

beforeEach(() => {
  wrapped = shallow(<ArticlesList {...mockProps} />);
});

afterEach(() => {
  wrapped.unmount();
});

it('contains articles', () => {
  expect(wrapped.find(testIdRule(TestId.ArticleItem)).length).toEqual(2);
});
