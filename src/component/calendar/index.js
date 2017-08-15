import React from 'react';
import BigCalendar from 'react-big-calendar';
import events from './events/events.js';
import moment from 'moment';

let allViews = Object.keys(BigCalendar.views).map(k => BigCalendar.views[k]);
console.log('views', BigCalendar.views);

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

let Basic = React.createClass({
  render(){
    return (
      <BigCalendar
        {...this.props}
        events={events}
        views={allViews}
        defaultDate={new Date()}
      />
    );
  },
});

export default Basic;
