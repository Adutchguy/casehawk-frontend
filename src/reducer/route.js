export default (state = '/landing', { type, payload }) => {
  switch (type) {
  case 'SIGNIN':
    return '/calendar';
  case 'LOGOUT':
    return '/landing';
  case 'SWITCH_ROUTE':
    return payload;
  default:
    return state;
  }
};
