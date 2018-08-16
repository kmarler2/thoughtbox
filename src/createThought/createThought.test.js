import React from 'react';
import { shallow, mount } from 'enzyme';
import CreateThought from './createThought.js';

describe('CreateThought', () => {

  it('should match the snapshot', () => {
    const wrapper = shallow(<CreateThought />);
    expect(wrapper).toMatchSnapshot()
  });

  it('updates the state of the title field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'title' } }
    const expectedState = {
      title: 'abc',
      body: ''
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('updates the state of the body field', () => {
    const wrapper = mount(<CreateThought/>);
    const mockEvent = { target: { value: 'abc', name: 'body' } }
    const expectedState = {
      title: '',
      body: 'abc'
    };
    wrapper.instance().handleChange(mockEvent)
    expect(wrapper.state()).toEqual(expectedState);
  });

  it('calls submitIdea prop function with the data from state as an argument, and input fields go back to empty strings', () => {
    const mockedSubmit = jest.fn();
    const wrapper = shallow(
      <CreateThought createThought={mockedSubmit} />
    );
    const expectedState = {
      title: '',
      body: ''
    };

    // How do we call handleSubmit?
    
    // How do we assert that our mock was called with the
    // correct params?
  });
});
