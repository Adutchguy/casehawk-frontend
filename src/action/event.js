import superagent from 'superagent';
import * as util from '../lib/util.js';

export const eventCreate = (event) => ({
  type: 'EVENT_CREATE',
  payload: event,
});

export const eventCreateRequest = (event) => (dispatch,getState) => {
  let {auth} = getState();
  return superagent.post(`${__API_URL__}/api/events`)
    .set('Authorization', `Bearer ${auth}`)
    .send(event)
    .then(res => {
      dispatch(eventCreate(res.body));
      return res;
    })
    .catch(util.logError);
};
