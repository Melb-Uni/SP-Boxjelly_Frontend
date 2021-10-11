import React from "react";
import ReactApexChart from "react-apexcharts";

export default function NegativeBar(props){
    const data = props.data;

    const datasets = [];
    datasets.push(-data[0].CountDeclClass);
    datasets.push(-data[0].CountDeclExecutableUnit);
    datasets.push(-data[0].CountDeclFile);
    datasets.push(-data[0].CountDeclFunction);
    datasets.push(-data[0].CountDeclMethod);
    datasets.push(-data[0].CountDeclMethodAll);

    const datasets1 = [];
    datasets1.push(data[1].CountDeclClass);
    datasets1.push(data[1].CountDeclExecutableUnit);
    datasets1.push(data[1].CountDeclFile);
    datasets1.push(data[1].CountDeclFunction);
    datasets1.push(data[1].CountDeclMethod);
    datasets1.push(data[1].CountDeclMethodAll);

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
        },
        xaxis: {
          categories: ["Classes", "Executable Unit", "Files", "Functions", "Local Methods", "Methods"],
          
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
              maxWidth: 200,
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