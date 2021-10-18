import React from "react";
import ReactApexChart from "react-apexcharts";

export default function UserHorizontalBar(props){
    const data = props.data;

    const options = {
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
          categories: ['Document Updated', 'Meeting Attendance', 'Number of Commits', 'Total Code lines'],
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
        // colors: ['#ff5c5c', '#dc143c',  '#0d52bd', '#000080'],
        // use default color
        legend: {
          position: 'bottom',
          fontSize:  '17px',
          fontWeight: 'normal',
          
        //   markers: {
        //     fillColors: ['#ff5c5c', '#dc143c',  '#0d52bd', '#000080']
        //   }
          
        },
        fill: {
          opacity: 1
        }
    };
    
    return (
        <div>
            <ReactApexChart options={options} series={data} type="bar"/>
        </div>
    );
}