import React from 'react';
import App from '../index.js';
import { shallow, mount } from 'enzyme';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('testing <App />', () => {
  test.only('renders 1 <App /> component,', () => {
    const store = createStore(console.log, {});
    const component = shallow(
      <Provider store={store}>
        <App />
      </Provider>
    );

    console.log('component *************', component);
    expect(component).toHaveLength(1);
  });
});

// ...

// create the store like you do on the client side, giving
// it your reducer(s) and possibly an initial state
//   const rendered = renderToString(
//     <Provider store={store}>
//       <RouterContext {...renderProps} />
//     </Provider>
//   )
//
//   // ...
//
// })
