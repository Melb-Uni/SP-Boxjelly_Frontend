import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();

export default function Heatmap(props) {
  const values = props.values;
  
  return (
    <div>
      <h3>Calendar-Heatmap of Modification</h3>
      <p> Click to View Details</p>
      <CalendarHeatmap
        startDate={shiftDate(today, -150)}
        endDate={today}
        values={values}
        classForValue={value => {
          if (!value) {
            return 'color-empty';
          }
          return `color-gitlab-${value.count}`;
        }}
        tooltipDataAttrs={value => {
          return {
            'data-tip': `${value.date.toISOString().slice(0, 10)} has count: ${
              value.count
            } -> who, what commit comment, time, update/modify, url
            
            `,
          };
        }}
        showWeekdayLabels={true}
        //onClick={value => alert(`Clicked on value with count: ${value.count}`)}
      />
      <ReactTooltip />
    </div>
  );
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}