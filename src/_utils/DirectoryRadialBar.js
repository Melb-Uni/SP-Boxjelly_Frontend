import React from "react";
import ReactApexChart from "react-apexcharts";
import { Tab, Col, Row, Container, DropdownButton, Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function DirectoryRadialBar(props){
    const data = props.data;

    const datasets = [];
    datasets.push(data[0].CountStmtDecl);
    datasets.push(data[0].CountStmtExe);

    const datasets1 = [];
    datasets1.push(data[1].CountStmtDecl);
    datasets1.push(data[1].CountStmtExe);

    const frontend_options = {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '16px',
                },
                value: {
                  fontSize: '16px',
                  formatter: function(w){
                    return w
                  }
                },
                total: {
                  show: true,
                  color: '#000000',
                  label: 'Count Statements',
                  formatter: function (w) {
                    return String(w.globals.seriesTotals.reduce((a, b) => {return a + b}, 0));
                  }
                }
              }
            }
        },
        labels: ['Declarative Statements', 'Executable Statements'],
        colors: ["#fe7f9c", "#fc9483"],
    }
    
    const backend_options = {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
            radialBar: {
              dataLabels: {
                name: {
                  fontSize: '16px',
                },
                value: {
                  fontSize: '16px',
                  formatter: function(w){
                    return w
                  }
                },
                total: {
                  show: true,
                  color: '#000000',
                  label: 'Count Statements',
                  formatter: function (w) {
                    return String(w.globals.seriesTotals.reduce((a, b) => {return a + b}, 0));
                  }
                }
              }
            }
        },
        labels: ['Declarative Statements', 'Executable Statements'],
        colors: ["#63c5da", "#48aaad"],
    }
    
    return (
        <div>
            <Row>
                <Col>
                    <ReactApexChart options={frontend_options} series={datasets} type="radialBar" height={400}/>
                </Col>
                <Col>
                    <ReactApexChart options={backend_options} series={datasets1} type="radialBar" height={400}/>
                </Col>
            </Row>
        </div>
    );
}