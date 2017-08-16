let validateEventCreate = (event) => {
  if(!event.title || !event.start || !event.end || !event.eventType){
    throw  new Error('VALIDATION ERROR: event requires name, start and end time and event type.');
  }
};

export default (state=[], action) => {
  let {type, payload} = action;
  switch(type){
  case 'EVENT_CREATE':
    validateEventCreate(payload);
    console.log('eventCreate', [...state, payload]);
    return [...state, payload];
  case 'EVENT_READ':
    return payload;
  case 'EVENT_UPDATE':
    return {...state, ...payload};
  case 'EVENT_DELETE':
    return null;
  default:
    return state;
  }
};
