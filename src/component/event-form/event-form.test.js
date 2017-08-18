import React from 'react';
import Eventform from './index.js';

import { shallow, mount } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe.only('testing <EventForm />', () => {
  test('renders 1 <EventForm /> component,', () => {
    const store = createStore(console.log, {});
    const component = mount(<Eventform />);
    let button = component.find('button');
    button.simulate('click');
    console.log('***********', button);
    expect(component).toHaveLength(1);
  });
});
