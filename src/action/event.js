import superagent from 'superagent';
import * as util from '../lib/util.js';

export const eventCreate = (event) => ({
  type: 'EVENT_CREATE',
  payload: event,
});

export const eventRead = (events) => ({
  type: 'EVENT_READ',
  payload: events,
});

export const eventCreateRequest = (event) => (dispatch, getState) => {
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

export const eventReadRequest = () => (dispatch, getState) => {
  let token = util.cookieFetch('X-Casehawk-Token');
  return superagent.get(`${__API_URL__}/api/events`)
    .withCredentials()
    .set('Authorization', `Bearer ${token}`)
    .then(res => {
      for(let i=0; i<res.body.length; i++){
        res.body[i].start = new Date(res.body[i].start);
        res.body[i].end = new Date(res.body[i].end);
      }
      dispatch(eventRead(res.body));
      return (res.body);
    })
    .catch(util.logError);
};
