import React from 'react';
import CalendarContainer from './index';

import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing <CalendarContainer />', () => {
  test('renders 1 <CalendarContainer /> component,', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      <Provider store={store}>
        <CalendarContainer />
      </Provider>
    );
    expect(component).toHaveLength(1);
  });
});
