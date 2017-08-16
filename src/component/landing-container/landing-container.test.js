import React from 'react';
import LandingContainer from './index.js';

import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing landing-container', () => {
  test('signup button should be active', () => {
    const store = createStore(console.log, store);
    const component = shallow(
      <Provider store={store}>
        <LandingContainer />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
