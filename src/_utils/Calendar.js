import React , { Children } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { tupleExpression } from '@babel/types'
import { Popover, OverlayTrigger, PopoverTitle, PopoverContent} from 'react-bootstrap';
import { events2HourAndMinute, isToday } from "../_utils/EventInfoExtractor"

export default function BigCalendar(props){
  const localizer = momentLocalizer(moment)
  const CURRENT_DATE = moment().toDate();
  const meetingList = props.meetingList;
  const keyDateList = props.keyDateList;

  function matchDate(date, dateList) { 
    console.log(date);
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
            backgroundColor: matchDate(value, keyDateList) ? 'lightblue' : 
            matchDate(value, meetingList) ? 'lightgreen' : 
            isToday(value) ? 'lightgrey' : 'white'
        },
    });

  function ClickEvent({ event }) {
    const popoverClickRootClose = (
      <Popover id="popover-basic" style={{ zIndex: 10000, background: 'lightyellow'}}>
        <PopoverTitle><strong>{event.title}</strong></PopoverTitle> 
        <PopoverContent>
          The event is from {events2HourAndMinute(event)[0]} to {events2HourAndMinute(event)[1]}
        </PopoverContent>
        <PopoverContent>
          <a href={event.link}>
            More details on Confluence
          </a>
        </PopoverContent>
      </Popover>
    );
  
    // console.log(event);
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
        style={{ height: 600 , width: '70%', padding: '50px'}}
        components={{
          dateCellWrapper: ColoredDateCellWrapper,
          event: ClickEvent
      }}
      />
    </div>
  )
}