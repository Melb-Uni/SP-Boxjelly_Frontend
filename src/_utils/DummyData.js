/** DonutChart2.js */
export const donut_data = {
    series: [20, 17, 9],
    options: {
      chart: {
        type: 'donut',
      },
      labels: [
        'To Do',
        'Doing',
        'Done'
      ],
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            height: 400,
            width: 400,
          },
          legend: {
            position: 'bottom'
          }
        }
      }],
      title: {
        text: "Board Card Status: Click to View Card List",
        align: 'left',
        margin: 15,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '15px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      colors: ['#ff82a5', '#ffe873', '#54d9f7'],
      tooltip: {
        y: {
          formatter: function (val) {
            return val + " - task_name"
          }
        }
      }
    },
}

/** Confluence total time spent for a week Dummy Data*/

const today = new Date();
const week = getWeek(today);

function getWeek(today){
  let week = [];
  for(let i = 7; i > 0; i--){
    week.push(shiftDate(today, -i).toISOString().slice(0, 10));
  }
  return week;
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

/** AreaChart.js */
export const all_doc_time = {
    series: [{
      name: 'Total Time Spent (minutes)',
      data: [50, 54, 70, 76, 78, 80, 82],
    }],
    options: {
      chart: {
      type: 'area',
      height: 350,
      zoom: {
          enabled: false
      }
      },
      dataLabels: {
      enabled: false
      },
      colors: ['#FF7F00'],
      stroke: {
      curve: 'straight'
      },
      
      title: {
      text: 'Document Time Spent',
      align: 'left'
      },
      labels: week,
      xaxis: {
      type: 'datetime',
      },
      yaxis: {
      opposite: true
      },
      legend: {
      horizontalAlign: 'left'
      }
  }, 
};

/** AreaChart.js */
export const one_doc_time = {
    series: [{
      name: 'Doc1 Time Spent (minutes)',
      data: [5, 5, 7, 7, 8, 10, 12],
    }],
    options: {
      chart: {
      type: 'area',
      height: 350,
      zoom: {
          enabled: false
      }
      },
      dataLabels: {
      enabled: false
      },
      colors: ['#FF7F00'],
      stroke: {
      curve: 'straight'
      },
      
      title: {
      text: 'Document Time Spent',
      align: 'left'
      },
      labels: week,
      xaxis: {
      type: 'datetime',
      },
      yaxis: {
      opposite: true
      },
      legend: {
      horizontalAlign: 'left'
      }
  },
};
  
/** AreaChart.js */
export const two_doc_time = {
    series: [{
      name: 'Doc2 Time Spent (minutes)',
      data: [1, 4, 7, 7, 7, 8, 8],
    }],
    options: {
      chart: {
      type: 'area',
      height: 350,
      zoom: {
          enabled: false
      }
      },
      dataLabels: {
      enabled: false
      },
      colors: ['#FF7F00'],
      stroke: {
      curve: 'straight'
      },
      
      title: {
      text: 'Document Time Spent',
      align: 'left'
      },
      labels: week,
      xaxis: {
      type: 'datetime',
      },
      yaxis: {
      opposite: true
      },
      legend: {
      horizontalAlign: 'left'
      }
  },
};

/** DonutChart.js
const data = {     
  labels: [
       'To Do',
       'Doing',
       'Done'
     ],
     datasets: [{
       label: 'Card Status',
       data: [300, 50, 100],
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)'
       ],
       hoverOffset: 4
     }]
   };
 */

/* LineChart.js
const all_timespent = {     
    labels: week,
    datasets: [{
       label: 'Total Time Spent (minutes)',
       data: [50, 54, 70, 76, 78, 80, 82],
       backgroundColor: "rgba(75,192,192,0.2)",
       borderColor: "rgba(75,192,192,1)"
     }]
};

const one_timespent = {     
  labels: week,
  datasets: [{
      label: 'Total Time Spent (minutes)',
      data: [5, 5, 7, 7, 8, 10, 12],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }]
};

const two_timespent = {     
  labels: week,
  datasets: [{
      label: 'Total Time Spent (minutes)',
      data: [1, 4, 7, 7, 7, 8, 8],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }]
};
*/