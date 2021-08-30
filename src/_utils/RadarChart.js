import React from 'react';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css'

/**

export default function RadarChart(props){
    const data = props.data;
    const captions = 
    
    return (
        <div>
        <RadarChart captions={captions}
            data={data}
            size={400}


          />
      </div>
    );
}



*/

class App extends React.Component {
  render() {
 	 const data = [
      {
        data: {
          battery: 0.7,
          design: .8,
          useful: 0.9,
          speed: 0.67,
          weight: 0.8,
          test1: 0.9,
        },
        meta: { color: 'blue' }
      },
    ];

	const captions = {
      battery: 'Confluence Document Modification',
      design: 'Confluence Meeting Notes Assignment (@)',
      useful: ' Confluence Meeting Attendance',
      speed: 'Number of Commits from GitHub',
      weight: 'Total code lines from GitHub',
      test1: 'Cards assignment in Jira',
    };

    return (
      <div>
        <RadarChart
            captions={captions}
            data={data}
            size={400}
          />
      </div>
    );
  }
}
export default App;