import superagent from 'superagent';
import * as util from '../lib/util.js';

export const eventCreate = (event) => ({
  type: 'EVENT_CREATE',
  payload: event,
});

export const eventCreateRequest = (event) => (dispatch,getState) => {
  console.log('event', event);
  let token = util.cookieFetch('X-Casehawk-Token');
  return superagent.post(`${__API_URL__}/api/events`)
    .withCredentials()
    .set('Authorization', `Bearer ${token}`)
    .send(event)
    .then(res => {
      dispatch(eventCreate(res.body));
      return res;
    })
    .catch(util.logError);
};
