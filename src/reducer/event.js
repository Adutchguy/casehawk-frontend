let validateEventCreate = (event) => {
  if(!event.name || !event.startDateTime || !event.endDateTime
    || !event.owner || !event.username || !event.email){
    throw  new Error('VALIDATION ERROR: event requires name, start and end time.');
  }
};

export default (state=null, action) => {
  let {type, payload} = action;
  switch(type){
  case 'EVENT_CREATE':
    validateEventCreate(payload);
    return payload;
  case 'EVENT_UPDATE':
    return {...state, ...payload};
  case 'EVENT_DELETE':
    return null;
  default:
    return state;
  }
};
