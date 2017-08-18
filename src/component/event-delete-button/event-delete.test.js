import React from 'react';
import EventDeleteButton from './index.js';

import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing <EventDeleteButton />', () => {
  test('renders 1 <EventDeleteButton /> component,', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      <Provider store={store}>
        <EventDeleteButton />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
