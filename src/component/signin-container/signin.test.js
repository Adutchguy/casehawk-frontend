import React from 'react';
import renderer from 'react-test-renderer';
import SigninContainer from './index';

import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

describe('signin-container', () => {
  test('should only render one instance of <SigninContainer />', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      // <Provider store={store}>
      <SigninContainer store={store} />
      // </Provider>
    );
    let deleteButton = component.find('EventDeleteButton');
    console.log('*******', deleteButton);
    expect(component).toHaveLength(1);
  });
});
