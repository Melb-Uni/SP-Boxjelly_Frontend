import React from "react";
import ReactApexChart from "react-apexcharts";
import { Tab, Col, Row, Container, DropdownButton, Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DirectoryRadarChart(props){
    const data = props.data;

    const datasets = [];
    datasets.push(data[0].CountLineCode);
    datasets.push(data[0].CountLineBlank);
    datasets.push(data[0].CountLineComment);

    const series = [{
      name: "Frontend",
      data: datasets
    }];

    const datasets1 = [];
    datasets1.push(data[1].CountLineCodeDecl);
    datasets1.push(data[1].CountLineCodeExe);
    datasets1.push(data[1].CountLineBlank);
    datasets1.push(data[1].CountLineComment);

    const series1 = [{
      name: "Backend",
      data: datasets1
    }];

    const frontend_options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
      },
      xaxis: {
        categories: ['Code Line', 'Blank Line', 'Comment Line']
      },
      fill: {
        opacity: 0.5,
        colors: ["#f4a3bb"]
      },
      stroke: {
        width: 2,
        colors: ["#f4a3bb"],
        dashArray: 0
      },
      markers: {
        size: 5,
        colors: ["#f4a3bb"],
        hover: {
          size: 10
        }
      }
    };

    const backend_options = {
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
      },
      xaxis: {
        categories: ['Declarative Code Line', 'Executable Code Line','Blank Line', 'Comment Line']
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
      }
    };
    
    return (
        <div>
            <Row>
                <Col>
                    <ReactApexChart options={frontend_options} series={series} type="radar" height={400}/>
                </Col>
                <Col>
                    <ReactApexChart options={backend_options} series={series1} type="radar" height={400}/>
                </Col>
            </Row>
              <p style={{fontSize: "16px"}}><i>Total Lines - Frontend: {data[0].CountLine}, 
              Backend: {data[1].CountLine}</i></p>
              <p style={{fontSize: "16px"}}><i>Comment / Code - Frontend:  {data[0].RatioCommentToCode},
              Backend: {data[1].RatioCommentToCode}</i></p>

        </div>
    );
}