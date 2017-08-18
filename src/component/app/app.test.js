import React from 'react';
import App from './index.js';

import { shallow } from 'enzyme';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing <App />', () => {
  const store = createStore(console.log, {});
  const component = shallow(
    <Provider store={store}>
      <App name="Apptastic" />
    </Provider>
  );
  test('renders 1 <App /> component,', () => {
    expect(component).toHaveLength(1);
  });
});
