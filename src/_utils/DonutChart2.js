import React from "react";
import ReactApexChart from "react-apexcharts";

export default function DonutChart(props){
    const data = props.data;
    const series = data.series;
    const options = data.options;
    
    return (
        <div>
            <ReactApexChart options={options} series={series} width={500} height={500} type="donut"/>
        </div>
    );
}

/*
class ApexChart extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
      
        series: [44, 55, 41, 17, 15],
        options: {
          chart: {
            type: 'donut',
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        },
      
      
      };
    }

  

    render() {
      return (
        

  <div id="chart">
<ReactApexChart options={this.state.options} series={this.state.series} type="donut" />
</div>


      );
    }
  }*/