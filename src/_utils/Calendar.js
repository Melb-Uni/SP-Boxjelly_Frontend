import React , { Children } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { tupleExpression } from '@babel/types'
import { Popover, OverlayTrigger, PopoverTitle, PopoverContent} from 'react-bootstrap';

export default function BigCalendar(props){
  const localizer = momentLocalizer(moment)
  const CURRENT_DATE = moment().toDate();
  const meetingList = ["2021-08-01", "2021-08-05"];
  const keyDateList = props.keyDateList;

  function matchDate(date, dateList) { 
    for (let d in dateList) {
      if (moment(date).isSame(moment(dateList[d]), 'day')) {
        return true
      }
    }
    return false
  }  

  const ColoredDateCellWrapper = ({children, value}) =>
    React.cloneElement(Children.only(children), {
        style: {
            ...children.style,
            // backgroundColor: moment(value).isSame(moment("2021-08-01"), 'day') ? 'lightgreen' : 
            // moment(value).isSame(moment(CURRENT_DATE), 'month') ? 'white': 'grey',
            backgroundColor: matchDate(value, keyDateList) ? 'lightblue' : 'white'
        },
    });

  function ClickEvent({ event }) {
    const popoverClickRootClose = (
      <Popover id="popover-basic" style={{ zIndex: 10000, background: 'lightyellow'}}>
        {/* <strong>Holy guacamole!</strong> Check this info.
        <strong>{event.title}</strong> */}
        <PopoverTitle><strong>{event.title}</strong></PopoverTitle>
        <PopoverContent>
          The event is from {event.start.toString()} to {event.end.toString()}
        </PopoverContent>
        <PopoverContent>
          <a href="https://confluence.cis.unimelb.edu.au:8443//display/COMP900822021SM1SP/Meeting+Notes+for+30th%2C+March">
            sample link to Confluence
          </a>
        </PopoverContent>
        
      </Popover>
    );
  
    console.log(event);
    return (
      <div>
        <div>
          <OverlayTrigger id="help" trigger="click" rootClose container={this} placement="bottom" overlay={popoverClickRootClose}>
            <div>{event.title}</div>
          </OverlayTrigger>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={props.events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 , width: '70%', padding: '50px'}}
        components={{
          dateCellWrapper: ColoredDateCellWrapper,
          event: ClickEvent
      }}
      />
    </div>
  )
}