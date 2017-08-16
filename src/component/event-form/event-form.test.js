import React from 'react';
import Eventform from './index.js';

import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing <EventForm />', () => {
  test('renders 1 <EventForm /> component,', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      <Provider store={store}>
        <Eventform />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
//
//
//
// describe('testing event-form', () => {
//   test('signup button should be active', () => {
//     const submitButton = shallow(<LandingContainer />);
//     // expect(submitButton.text()).toEqual('submit');
//   });
// });
