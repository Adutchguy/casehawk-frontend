import React from 'react';
import Calendar from './index.js';

import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing <Calendar />', () => {
  test('renders 1 <Calendar /> component,', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      <Provider store={store}>
        <Calendar />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
