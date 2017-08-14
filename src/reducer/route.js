export default (state = '/signup', { type, payload }) => {
  switch (type) {
  case 'LOGIN':
    return '/landing';
  case 'LOGOUT':
    return '/landing';
  case 'SWITCH_ROUTE':
    return payload;
  default:
    return state;
  }
};
