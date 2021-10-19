/********************************************************************************************/
/***************************** Process Quality Page *****************************************/

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


/********************************************************************************************/
/***************************** Product Quality Page *****************************************/

export const polar_data = {
  labels: ['Red.js', 'Blue.js', 'Yellow.js', 'Green.html', 'Purple.css', 'Orange.js'],
  datasets: [
    {
      data: [12, 17, 3, 5, 9, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderWidth: 1,
    }
  ],
};

export const radial_data = {
  series: [44, 50],
  options: {
    chart: {
      height: 350,
      type: 'radialBar',
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: '16px',
          },
          value: {
            fontSize: '16px',
            formatter: function(w){
              return w
            }
          },
          total: {
            show: true,
            color: '#000000',
            label: 'Count Statements',
            formatter: function (w) {
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return String(w.globals.seriesTotals.reduce((a, b) => {return a + b}, 0));
            }
          }
        }
      }
    },
    labels: ['Declarative Statements', 'Executable Statements'],
    colors: ['#68b54a', '#735dde'],
    title: {
      text: "Statments Comparison",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '16px',
        fontWeight:  'bold',
        color:  '#263238'
      },
  }
}};

export const radar_func_data = {
    
  series: [{
    name: 'my_func',
    data: [80, 50, 30, 40, 100],
  }, {
    name: 'our_func',
    data: [20, 30, 40, 80, 20],
  }, {
    name: 'your_func',
    data: [44, 76, 78, 13, 43],
  }, {
    name: 'his_func',
    data: [74, 7, 18, 16, 35],
  }, {
    name: 'her_func',
    data: [50, 37, 12, 10, 30],
  }],
  options: {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
    },
    xaxis: {
      categories: ['Blank Line', 'Code Line', 'Declarative Code Line', 'Executable Line', 'Comment Line']
    },
    title: {
      text: "Line Comparison",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '16px',
        fontWeight:  'bold',
        color:  '#263238'
      },
    }
  },
};

export const radar_dir_data = {
  series: [{
    name: 'App.js',
    data: [80, 50, 30, 40, 100],
  }, {
    name: 'index.html',
    data: [20, 30, 40, 80, 20],
  }, {
    name: 'style.css',
    data: [44, 76, 78, 13, 43],
  }, {
    name: 'Home.js',
    data: [74, 7, 18, 16, 35],
  }],
  options: {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
    },
    xaxis: {
      categories: ['Blank Line', 'Code Line', 'Declarative Code Line', 'Executable Line', 'Comment Line']
    },
    title: {
      text: "Line Comparison",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '16px',
        fontWeight:  'bold',
        color:  '#263238'
      },
    }
  },
};

/** Data for directory metrics */
export const dir_data = {
  series: [
    {
      data: [
        {
          x: 'App.js',
          y: 318
        },
        {
          x: 'index.html',
          y: 149
        },
        {
          x: 'style.css',
          y: 184
        },
        {
          x: 'Home.js',
          y: 40
        },
      ]
    }
  ],
  options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Files: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      plotOptions: {
        treemap: {
          distributed: true,
        }
      }
    },
    hasError: false
};

/** Data for directory metrics */
export const dir_metric_data = {
  series: [
    {
      data: [
        {
          x: 'App.js',
          y: 9
        },
        {
          x: 'index.html',
          y: 20
        },
        {
          x: 'style.css',
          y: 8
        },
        {
          x: 'Home.js',
          y: 4
        },
      ]
    }
  ],
  options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Files: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      plotOptions: {
        treemap: {
          distributed: true,
        }
      }
    },
    hasError: false
};

export const func_metric_data = {
  series: [
    {
      data: [
        {
          x: 'my_func',
          y: 30
        },
        {
          x: 'our_func',
          y: 80
        },
        {
          x: 'your_func',
          y: 20
        },
        {
          x: 'his_func',
          y: 20
        },
        {
          x: 'her_func',
          y: 20
        },
      ]
    }
  ],
  options: {
      //colors: ['#ff9eed'],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Functions: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      plotOptions: {
        treemap: {
          distributed: true,
        }
      }
    },
    hasError: false
};

/** Data for function metrics */
export const func_data = {
  series: [
    {
      data: [
        {
          x: 'my_func',
          y: 80
        },
        {
          x: 'our_func',
          y: 149
        },
        {
          x: 'your_func',
          y: 60
        },
        {
          x: 'his_func',
          y: 40
        },
        {
          x: 'her_func',
          y: 50
        },
      ]
    }
  ],
  options: {
      //colors: ['#ff9eed'],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Functions: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
      },
      plotOptions: {
        treemap: {
          distributed: true,
        }
      }
    },
    hasError: false
};

/********************************************************************************************/
/***************************** Individual Contribution Page *****************************************/

/* Card */
export const latest_commit = [
  "user1: This is a latest commits", 
  "user2: This is a latest commits", 
  "user3: This is a latest commits", 
  "user4: This is a latest commits", 
  "user5: This is a latest commits"];

/* Card */
export const latest_document = [
  "user1: Document Name", 
  "user2: Document Name", 
  "user3: Document Name", 
  "user4: Document Name", 
  "user5: Document Name"];

/* Card */
export const latest_card = [
  "user1: Card Tag Name", 
  "user2: Card Tag Name", 
  "user3: Card Tag Name", 
  "user4: Card Tag Name", 
  "user5: Card Tag Name"];

/* Radar Chart */
export const all_data = [{
  name: 'user1',
  data: [40, 23, 20, 21, 15, 11],
}, {
  name: 'user2',
  data: [15, 23, 17, 15, 30, 15],
}, {
  name: 'user3',
  data: [10, 20, 21, 25, 21, 30],
}, {
  name: 'user4',
  data: [10, 24, 21, 17, 17, 30],
}, {
  name: 'user5',
  data: [25, 10, 21, 22, 17, 14],
}
];

/* Radar Chart */
export const radar_all_data = {
    
  series: all_data,
  // series: [all_data[0]],
  options: {
    chart: {
      height: 1000,
      type: 'radar',
    },
    title: {
      text: "Team Radar Chart: Hover the Name to View Individual, Click to Exclude",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '20px',
        fontWeight:  'bold',
        //fontFamily:  undefined,
        color:  '#263238'
      },
    },
    xaxis: {
      categories: ['Document Updated', 'Document Modified', 'Meeting Attendance', 'Number of Commits', 'Total Code lines', 'Cards Assignment'],
      labels:{
        show: true,
        style: {
          fontSize:  '12px',
          fontWeight: 'bold',
        },
      },
    }, 
    legend: {
      position: 'bottom',
      fontSize:  '17px',
      fontWeight: 'normal',
    },
  },
};

/* Horizontal Bar Chart */
export const horizontal_all_data = {
    
  series: all_data,
  options: {
    chart: {
      type: 'bar',
      height: 500,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      },
      events: {
        dataPointSelection: function (event, chartContext, config) {
          console.log(chartContext);
          
          // tasks
          console.log(config.seriesIndex);
          
          // user
          console.log(config.dataPointIndex);
        }
      }
    },
    title: {
      text: "Team Bar Chart: Hover the Legend to Show User, Click to Exclude",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '20px',
        fontWeight:  'bold',
        //fontFamily:  undefined,
        color:  '#263238'
      },
    },
    yaxis: {
      labels:{
        show: true,
        style: {
          fontSize:  '12px',
          fontWeight: 'normal',
        },
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: true,
        borderRadius: 10
      },
    },
    xaxis: {
      categories: ['Document Updated', 'Document Modified', 'Meeting Attendance', 'Number of Commits', 'Total Code lines', 'Cards Assignment'],
      tickAmount: 10,
      max: 100,
      labels:{
        show: true,
        style: {
          fontSize:  '12px',
          fontWeight: 'normal',
        },
      },
    },
    //colors: ['#ff3224', '#ffae00', '#f8ff38', '#8eff38', '#38ffdb', '#386aff'],
    // use default color
    legend: {
      position: 'bottom',
      fontSize:  '17px',
      fontWeight: 'normal',
      /*
      // use default color
      markers: {
        fillColors: ['#ff3224', '#ffae00', '#f8ff38', '#8eff38', '#38ffdb', '#386aff']
      }
      */
    },
    fill: {
      opacity: 1
    }
  },
};

/* Stacked Bar Chart */
export const column_all_data = {
    
  series: [{
      name: 'Document Updated',
      data: [40, 15, 10, 10, 25]
    }, {
      name: 'Document Modified',
      data: [23, 23, 20, 24, 12]
    }, {
      name: 'Meeting Attendance',
      data: [20, 17, 21, 21, 21]
    }, {
      name: 'Number of Commits',
      data: [21, 15, 25, 17, 22]
    }, {
      name: 'Total Code lines',
      data: [15, 30, 21, 17, 17]
    }, {
      name: 'Cards Assignment',
      data: [11, 15, 30, 30, 14]
    }
  ],
  options: {
    chart: {
      type: 'bar',
      height: 500,
      stacked: true,
      toolbar: {
        show: true
      },
      zoom: {
        enabled: true
      },
      events: {
        dataPointSelection: function (event, chartContext, config) {
          // console.log(chartContext);
          // tasks
          // console.log(config.seriesIndex);         
          // user
          // console.log(config.dataPointIndex);
        }
      }
    },
    title: {
      text: "Team Bar Chart: Hover the Legend to Compare Task, Click to Exclude",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '20px',
        fontWeight:  'bold',
        //fontFamily:  undefined,
        color:  '#263238'
      },
    },
    yaxis: { 
      show: true,
      title: {
        text: "% of Tasks",
        style: {
          fontSize:  '15px',
          fontWeight: 'normal',
        },
      },
    },
    responsive: [{
      breakpoint: 480,
      options: {
        legend: {
          position: 'bottom',
          offsetX: -10,
          offsetY: 0
        }
      }
    }],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10
      },
    },
    xaxis: {
      categories: ['user1', 'user2', 'user3', 'user4', 'user5'],
      labels:{
        show: true,
        style: {
          fontSize:  '15px',
          fontWeight: 'normal',
        },
      }
    },
    colors: ['#f03b20', '#feb24c', '#ffeda0', '#2b8cbe', '#a6bddb', '#a1d99b'],
    legend: {
      position: 'right',
      offsetY: 40,
      fontSize:  '17px',
      fontWeight: 'normal',
      
      markers: {
        fillColors: ['#f03b20', '#feb24c', '#ffeda0', '#2b8cbe', '#a6bddb', '#a1d99b']
      }
    },
    fill: {
      opacity: 1
    }
  },
};
