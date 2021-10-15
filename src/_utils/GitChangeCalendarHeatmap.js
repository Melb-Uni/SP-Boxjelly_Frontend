import React from 'react';
import CalendarHeatmap from 'react-calendar-heatmap';
import ReactTooltip from 'react-tooltip';
import 'react-calendar-heatmap/dist/styles.css';

const today = new Date();

export default function GitChangeCalendarHeatmap(props) {
  const values = props.values;
  
  return (
    <div>
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
            'data-tip': `${value.date} has count: ${value.count} 
            Totals: ${value.totals} 
            Additions: ${value.additions}
            Deletions: ${value.deletions}
            Sources: ${value.sources} 
            `,
          };
        }}
        showWeekdayLabels={true}
         //onClick={value => alert(`Clicked on value with count: ${value.messages}`)}
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