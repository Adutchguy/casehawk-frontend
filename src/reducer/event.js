let validateEventCreate = (event) => {
  if(!event.name || !event.startDateTime || !event.endDateTime || !event.eventType){
    throw  new Error('VALIDATION ERROR: event requires name, start and end time and event type.');
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
