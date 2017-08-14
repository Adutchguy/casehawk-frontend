export default (state=null, action) => {
  let {type, payload} = action;
  switch(type){
  case 'EVENT_CREATE':
    return payload;
  case 'EVENT_UPDATE':
    return {...state, ...payload};
  case 'EVENT_DELETE':
    return null;
  default:
    return state;
  }
};
