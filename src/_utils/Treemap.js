import React from "react";
import ReactApexChart from "react-apexcharts";

export default function TreeChart(props) {
    const data = props.data;

    const ten_data = []
    for (let i = 0; i < 10; i++){
      ten_data.push({
        x: data.filename[i],
        y: data.value[i],
        fillColor: data.color[i],
      })
    }

    const series = [{data: ten_data}];
    const options = {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      dataLabels: {
        enabled: true,
        style: {
          fontSize: '18px',
          color:  '#263238'
        },
      }
    };

    return (
        <div>
            <ReactApexChart options={options} series={series} type="treemap" height={350} />
        </div>
    );
}