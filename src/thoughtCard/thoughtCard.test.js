import React from 'react';
import { shallow } from 'enzyme';
import ThoughtCard from './thoughtCard.js';

describe('ThoughtCard', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<ThoughtCard />);
    expect(wrapper).toMatchSnapshot()
  });
});