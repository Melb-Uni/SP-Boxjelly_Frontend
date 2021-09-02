import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TreeChart(props) {
    const data = props.data;
    const series = data.series;
    const options = data.options;
    return (
        <div>
            <ReactApexChart options={options} series={series} type="treemap" height={350} />
        </div>
    );
}

/**

class App extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
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

        series2: [
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
                  y: 403
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
            }
          },
          hasError: false
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return <h1>Something went wrong!</h1>;
        }
      return (
        <div>
            <ReactApexChart options={this.state.options} series={this.state.series2} type="treemap" height={350} />
        </div>
    );
    }
}
export default App;

 */