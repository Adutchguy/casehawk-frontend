import { combineReducers } from 'redux';

import token from './token.js';
import route from './route.js';
import events from './events.js';

export default combineReducers({ token, route, events });
