import React , { Children } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { tupleExpression } from '@babel/types'

export default function BigCalendar(props){
  const localizer = momentLocalizer(moment)
  const CURRENT_DATE = moment().toDate();
  const meetingList = ["2021-08-01", "2021-08-05"];

  function matchDate(date, dateList) { 
    for (let d in dateList) {
      if (moment(date).isSame(moment(d), 'day')) {
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
            backgroundColor: matchDate(value, meetingList) ? 'lightblue' : 'white'
        },
    });
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        components={{
          dateCellWrapper: ColoredDateCellWrapper,
      }}
      />
    </div>
  )
}