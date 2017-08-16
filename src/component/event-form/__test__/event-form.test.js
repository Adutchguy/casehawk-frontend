import React from 'react';
import { shallow } from 'enzyme';
import LandingContainer from '../index.js';

describe('testing event-form', () => {
  test('signup button should be active', () => {
    const submitButton = shallow(<LandingContainer />);
    // expect(submitButton.text()).toEqual('submit');
  });
});
