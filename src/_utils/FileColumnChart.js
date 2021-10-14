import React from "react";
import ReactApexChart from "react-apexcharts";

export default function FileColumnChart(props) {
    const data = props.data;
    const series = [
        {
            name: "Declarative Statement",
            data: data.countstmtdecl.value,
        },
        {
            name: "Executable Statement",
            data: data.countstmtexe.value,
        },
    ]

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
            title: {
              text: "Count",
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
            categories: data.countstmtdecl.filename,
            labels:{
              show: true,
              style: {
                fontSize:  '15px',
                fontWeight: 'normal',
              },
              maxHeight: 300,
            }
          },
          colors: [data.countstmtdecl.color[0], data.countstmtdecl.color[7]],
          legend: {
            position: 'right',
            offsetY: 40,
            fontSize:  '17px',
            fontWeight: 'normal',
            
            markers: {
              fillColors: [data.countstmtdecl.color[0], data.countstmtdecl.color[9]],
            }
          },
          fill: {
            opacity: 1
          }
    };

    return (
        <div>
            <ReactApexChart options={options} series={series} type="bar" height={500} />
        </div>
    );
}