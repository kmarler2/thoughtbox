import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

it('matches the snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot()
  });

it('renders a thoughtList with the correct props', () => {
});

it('initial state is an empty array', () => {
});

it('createThought adds a thought to state', () => {
});

// Feel free to add additional tests. These are meant just to get you started.
