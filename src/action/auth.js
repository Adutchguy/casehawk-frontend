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
    .withCredentials()
    .auth(user.username, user.password)
    .then(res => {
      util.cookieCreate('X-Casehawk-Token', res.text, 7);
      if(res.text)
        dispatch(signin(res.text));
      return res;
    })
    .catch(util.logError);
};

export const signupRequest = (user) => (dispatch) => {
  return superagent.post(`${__API_URL__}/api/signup`)
    .withCredentials()
    .send(user)
    .then(res => {
      util.cookieCreate('X-Casehawk-Token', res.text, 7);
      if(res.text)
        dispatch(signin(res.text));
      return res;
    })
    .catch(util.logError);
};
