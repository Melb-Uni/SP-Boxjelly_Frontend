import React from "react";
import ReactApexChart from "react-apexcharts";

export default function NegativeBar(props){
    const data = props.data;

    const datasets = [];
    datasets.push(-data[0].class_count);
    datasets.push(-data[0].file_count);
    datasets.push(-data[0].function_count);

    const datasets1 = [];
    datasets1.push(data[1].class_count);
    datasets1.push(data[1].file_count);
    datasets1.push(data[1].function_count);


    const series = [
        {
            name: 'Frontend',
            data: datasets
        },
        {
            name: 'Backend',
            data: datasets1
        }]

    const options = {
        chart: {
          type: 'bar',
          height: 300,
          stacked: true
        },
        colors: ["#f4a3bb", "#9bcefd"],
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%',
          },
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 1,
          colors: ["#fff"]
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val
            }
          },
          y: {
            formatter: function (val) {
              return Math.abs(val)
            }
          }
        },
        legend: {
            position: 'right',
            fontSize:  '20px',
        },
        title: {
        //   text: 'Classes, Files & Functions Comparison',
        //   style: {
        //     fontSize:  '21px',
        //     fontWeight:  'bold',
        //     color:  '#263238'
        //   },
        },
        xaxis: {
          categories: ["Classes", "Files", "Functions"],
          
          title: {
            text: 'Count',
            style: {
                fontSize:  '16px',
                fontWeight:  'normal',
                color:  '#263238'
            },
          },
          labels: {
            formatter: function (val) {
              return Math.abs(val)
            }
          }
        },
        yaxis: {
            labels:{
            style: {
              fontSize:  '16px',
              color:  '#263238'
            },
            }
          },
      };
    
    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar"/>
        </div>
    );
}