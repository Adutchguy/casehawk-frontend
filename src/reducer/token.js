export default (state = null, { type, payload }) => {
  switch (type) {
  case 'SIGNIN':
    return payload;
  case 'LOGOUT':
    return null;
  default:
    return state;
  }
};
