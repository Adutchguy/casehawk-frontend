import React from 'react';
import CalendarContainer from './index';

import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import {eventCreateRequest, eventReadRequest, eventUpdateRequest, eventDeleteRequest} from '../../action/event.js';
import {
  handleEventCreate,
  handleEventUpdate,
  handleEventDelete,
  handleEventClick,
} from './index.js';

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

  test('handleEventCreate', () => {
    const store = createStore(console.log, {});
    const wrapper = shallow(
      // <Provider store={store}>
      <CalendarContainer store={store} />
      // </Provider>
    );
    // let eventCreated = wrapper.instance().handleEventCreate();
    console.log('WRAPPER', wrapper);

    // console.log('eventCreated', eventCreated);
    // expect(eventCreated).toExist();
    expect(wrapper).toHaveLength(1);
  });
});
