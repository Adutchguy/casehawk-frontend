import superagent from 'superagent';
import * as util from '../lib/util.js';

export const signin = (token) => ({
  type: 'SIGNIN',
  payload: token,
});

export const logout = () => {
  util.cookieDelete('X-Casehawk-Token');
  return { type: 'LOGOUT' };
};

export const signinRequest = (user) => (dispatch) => {
  return superagent.get(`${__API_URL__}/api/signin`)
    .auth(user.username, user.password)
    .then(res => {
      let token = util.cookieFetch('X-Casehawk-Token');
      if(token)
        dispatch(signin(token));
      return res;
    })
    .catch(util.logError);
};

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/signup`)
    .send(user)
    .then(res => {
      console.log('res', res);
      console.log('res.body', res.body);
      let token = util.cookieFetch('X-Casehawk-Token');
      if(token)
        dispatch(signin(token));
      return res;
    })
    .catch(util.logError);
};
