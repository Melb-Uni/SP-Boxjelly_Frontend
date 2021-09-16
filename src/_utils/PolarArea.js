import React from 'react'
import PolarArea  from 'react-chartjs-2'


export default function Polar(props){
  const data = props.data;


  
  return (
      <div>
          <PolarArea data={data} type="polarArea" options={{legend: { display: true, position: "bottom", labels: {fontSize: 15}}}} />
      </div>
  );
}
/*
class App extends React.Component {
    render() {
        const data = {
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

        return(
            <div>
                <PolarArea data={data} type="polarArea"
                />
            </div>
        );
    }
}
export default App;
*/