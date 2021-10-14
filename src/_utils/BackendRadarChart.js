import React from "react";
import ReactApexChart from "react-apexcharts";

export default function BackendRadarChart(props){
    const data = props.data;

    const series = [
    {
      name: data.countcode.filename[0],
      data: [data.countcodedecl.value[0], data.countcodeexe.value[0], data.countblank.value[0], data.countcomment.value[0]]
    },
    {
    name: data.countcode.filename[1],
    data: [data.countcodedecl.value[1], data.countcodeexe.value[1], data.countblank.value[1], data.countcomment.value[1]]
    },
    {
    name: data.countcode.filename[2],
    data: [data.countcodedecl.value[2], data.countcodeexe.value[2], data.countblank.value[2], data.countcomment.value[2]]
    },
    {
    name: data.countcode.filename[3],
    data: [data.countcodedecl.value[3], data.countcodeexe.value[3], data.countblank.value[3], data.countcomment.value[3]]
    },
    {
    name: data.countcode.filename[4],
    data: [data.countcodedecl.value[4], data.countcodeexe.value[4], data.countblank.value[4], data.countcomment.value[4]]
    },
    {
    name: data.countcode.filename[5],
    data: [data.countcodedecl.value[5], data.countcodeexe.value[5], data.countblank.value[5], data.countcomment.value[5]]
    },
    {
    name: data.countcode.filename[6],
    data: [data.countcodedecl.value[6], data.countcodeexe.value[6], data.countblank.value[6], data.countcomment.value[6]]
    },
    {
    name: data.countcode.filename[7],
    data: [data.countcodedecl.value[7], data.countcodeexe.value[7], data.countblank.value[7], data.countcomment.value[7]]
    },
    {
    name: data.countcode.filename[8],
    data: [data.countcodedecl.value[8], data.countcodeexe.value[8], data.countblank.value[8], data.countcomment.value[8]]
    },
    {
    name: data.countcode.filename[9],
    data: [data.countcodedecl.value[9], data.countcodeexe.value[9], data.countblank.value[9], data.countcomment.value[9]]
    },
    ];

    const backend_options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
      },
      xaxis: {
        categories: ['Code Declarative Line', 'Code Executable Line', 'Blank Line', 'Comment Line']
      },
      fill: {
        opacity: 0.5,
        colors: ["#9bcefd"]
      },
      stroke: {
        width: 2,
        colors: ["#9bcefd"],
        dashArray: 0
      },
      markers: {
        size: 5,
        colors: ["#9bcefd"],
        hover: {
          size: 10
        }
      },
      legend: {
        position: 'right',
        offsetY: 40,
        fontSize:  '17px',
        fontWeight: 'normal',
        
        markers: {
          fillColors: data.countcode.color,
        }
      },
    };


    return (
        <div>
            <ReactApexChart options={backend_options} series={series} type="radar" height={450}/>
        </div>
    );
}