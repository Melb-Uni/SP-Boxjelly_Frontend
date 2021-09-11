import React from "react";
import ReactApexChart from "react-apexcharts";

export default function RadialBar(props){
    const data = props.data;
    const series = data.series;
    const options = data.options;
    const labels = data.labels;
    
    return (
        <div>
            <ReactApexChart options={options} series={series} labels={labels} type="radialBar" height={400}/>
        </div>
    );
}

/*
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 67, 83],
        options: {
          chart: {
            height: 350,
            type: 'radialBar',
          },
          plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '22px',
                },
                value: {
                  fontSize: '16px',
                },
                total: {
                  show: true,
                  label: 'Total',
                  formatter: function (w) {
                    // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                    return 249
                  }
                }
              }
            }
          },
          labels: ['Apples', 'Oranges', 'Bananas', 'Berries'],
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={350} />
</div>


      );
    }
  }
*/