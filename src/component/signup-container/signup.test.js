import React from 'react';
import renderer from 'react-test-renderer';
import SignupContainer from './index';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('testing signup-container', () => {
  test('should only render one instance of <SignupContainer />', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      <Provider store={store}>
        <SignupContainer />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
