import React from "react";
import ReactApexChart from "react-apexcharts";

export default function UserRadarChart(props){
    const data = props.data;

    const options = {
        chart: {
          height: 1000,
          type: 'radar',
        },
        xaxis: {
          categories: ['Document Updated', 'Meeting Attendance', 'Number of Commits', 'Total Code lines'],
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
    };
    
    return (
        <div>
            <ReactApexChart options={options} series={data} type="radar"/>
        </div>
    );
}