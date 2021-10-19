import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TaskStackedBar(props){
    const data = props.data;

    const series =[
        {
            name: 'Document Updated',
            data: data.conUpdate,
        },
        {
            name: 'Meeting Attendance',
            data: data.conAttendence,
        },
        {
            name: 'Number of Commits',
            data: data.gitUpdate,
        },
        {
            name: 'Total Code lines',
            data: data.gitChange,
        }
    ];

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
          show: true,
          floating: false,
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
          categories: data.names,
          labels:{
            show: true,
            style: {
              fontSize:  '15px',
              fontWeight: 'normal',
            },
          }
        },
        colors: ['#ff5c5c', '#dc143c',  '#0d52bd', '#000080'],
        legend: {
          position: 'right',
          offsetY: 40,
          fontSize:  '17px',
          fontWeight: 'normal',
          
          markers: {
            fillColors: ['#ff5c5c', '#dc143c', '#0d52bd', '#000080']
          }
        },
        fill: {
          opacity: 1
        }
    };
    
    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar"/>
        </div>
    );
}