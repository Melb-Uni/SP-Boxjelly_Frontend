import React , { Children } from 'react'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Popover, OverlayTrigger, PopoverTitle, PopoverContent} from 'react-bootstrap';
import { events2HourAndMinute, isToday } from "../_utils/EventInfoExtractor"
import { makeStyles } from '@material-ui/core';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles ({
  calendar: {
    height: 600 , 
    width: '70%', 
    padding: 20, 
    margin: 'auto'
  },
  popover: {
    zIndex: 10000, 
    background: '#ded0b4',
    padding: 10,
    borderRadius: 6,
    boxShadow: "5px 1px 1px lightgrey",
  },
  keyDateCard: {
    width: '10em',
    height: 30,
    background: "lightgreen",
    margin: "auto",
    padding: 0,
    marginLeft: 20
  },
  meetingCard: {
    width: '10em',
    height: 30,
    background: "lightblue",
    margin: "auto",
    marginLeft: '0.5em',
    marginRight: '40em'
  },
  cardContent: {
    "&:last-child": {
      padding: 0,
    }
  }, 
  cardContainer: {
    width: "70%",
    display: "flex",
    justifyContent: "initial",
    margin: "auto",
    marginBottom: 50,
  }, 
  typography: {
    fontSize: 14,
    fontWeight: "bold" + "!important",
    textAlign: "center",
    padding: "4px"+ "!important",
  },
})

export default function BigCalendar(props){
  const classes = useStyles();
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
            backgroundColor: matchDate(value, keyDateList) ? 'lightgreen' : 
            matchDate(value, meetingList) ? 'lightblue' : 
            isToday(value) ? 'lightgrey' : 'white'
        },
    });

  function ClickEvent({ event }) {
    const popoverClickRootClose = (
      <Popover id="popover-basic" className={classes.popover}>
        <PopoverTitle><strong>{event.title}</strong></PopoverTitle> 
        <PopoverContent>
          This event is from {events2HourAndMinute(event)[0]} to {events2HourAndMinute(event)[1]}
        </PopoverContent>
        <PopoverContent>
          <a href={event.link}>
            More details on Confluence
          </a>
        </PopoverContent>
      </Popover>
    );
  
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
        className={classes.calendar}
        components={{
          dateCellWrapper: ColoredDateCellWrapper,
          event: ClickEvent
      }}/>
      <div className={classes.cardContainer}>
        
        <Card className={classes.keyDateCard}>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.typography}
            >
              Key dates
            </Typography>
          </CardContent>
        </Card>

        <Card className={classes.meetingCard}>
          <CardContent className={classes.cardContent}>
            <Typography
              className={classes.typography}
            >
              Meetings
            </Typography>
          </CardContent>
        </Card> 
      </div>  
    </div>

  )
}