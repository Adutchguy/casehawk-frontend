import eventReducer from '../reducer/events.js';
import { EVENT_CREATE, EVENT_READ } from '../action/event.js';

describe('testing event reducer', () => {
  let state = {
    events: [],
  };

  test('EVENT_CREATE should create an event', () => {
    const result = eventReducer.EVENT_CREATE(state, {
      payload: {
        title: 'Beans',
        allDay: false,
        start: new Date(2015, 3, 12, 10, 30, 0, 0),
        end: new Date(2015, 3, 12, 10, 30, 0, 0),
        eventType: null,
        tag: '',
        notifyChecked: false,
      },
    });
    expect(result).toBeDefined();
  });
});
