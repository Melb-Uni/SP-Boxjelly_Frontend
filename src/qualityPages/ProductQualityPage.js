import React from "react";
import uomHeader from "../header/uomheader.js";
import Banner from "../_utils/Banner";
import DataTable from "react-data-table-component";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { InformationalNote } from "../_utils/Alert";
import { alertConstants } from "../_constants";
import ReverseTable from "../_utils/ReverseTable";



import ButtonGroup from "../_utils/ButtonGroup";
import { commonConstants } from "../_constants";
import { Spin } from "antd";
import PolarArea from "../_utils/PolarArea";
import Treemap from "../_utils/Treemap";
import RadarChart2 from "../_utils/RadarChart2";
import { Tab, Col, Row, Container, DropdownButton, Dropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import RadialBar from '../_utils/RadialBar';


class ProductQualityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CodeMetrics: [
        {
          all: 1,
          classes: 0,
          decst: 0,
          excst: 0,
          file: 0,
          func: 0,
          pre: 0,
          ratio: 0,
        },
      ],
      data: [
        {
          all: 10,
          classes: 30,
          decst: 40,
          excst: 50,
          file: 50,
          func: 60,
          pre: 30,
          ratio: 50,
        },
      ],

      btnNames: [
        commonConstants.DIRECTORY_STRUCTURE,
        commonConstants.DIRECTORY_METRICS,
        commonConstants.FUNCTION_METRICS,
      ],



      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],





      dir_data: dir_data,
      func_data: func_data,
    };

    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
  }

  /** should be 
  this.props.getTeamCodeMetrics(this.props.currentTeamKey); 
  */
  handleBtnGroupClick(e) {
    let selected = e.currentTarget.firstChild.innerHTML;
    if (selected == commonConstants.DIRECTORY_STRUCTURE) {
      this.props.getTeamGithubCommits(this.props.currentTeamKey);
    } else if (selected == commonConstants.DIRECTORY_METRICS) {
      this.props.getTeamGithubCommits(this.props.currentTeamKey);
    } else {
      this.props.getTeamGithubCommits(this.props.currentTeamKey);
    }
    this.setState({
      btnSelected: selected,
    });
  }




  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamCodeMetrics(this.props.currentTeamKey);
    }
  }

  render() {
    const columns1 = [
      {
        name: "Number of all lines",
        selector: "code_lines_count",
        center: Boolean(true),
      },
      {
        name: "Number of classes",
        selector: "class_count",
        center: Boolean(true),
      },
      {
        name: "Number of files",
        selector: "file_count",
        center: Boolean(true),
      },
      {
        name: "Number of functions",
        selector: "function_count",
        center: Boolean(true),
      },
    ];
    const columns2 = [
      {
        name: "Number of comment lines",
        selector: "comment_lines_count",
        center: Boolean(true),
      },
      {
        name: "Ratio of comment lines to code lines",
        selector: "comment_to_code_ratio",
        center: Boolean(true),
      },
      {
        name: "Number of declarible statements",
        selector: "declarative_lines_count",
        center: Boolean(true),
      },
      {
        name: "Number of excutable statements",
        selector: "executable_lines_count",
        center: Boolean(true),
      },
    ];
    const customStyles = {
      headCells: {
        style: {
          fontSize: "20px",
          background: "#EEEEEE",
        },
      },
      cells: {
        style: {
          fontSize: "20px",
        },
      },
    };
    return (
      <div className="uomcontent">
        {uomHeader("Product Quality")}
        <div role="main">
          <div className="page-inner">
            <Banner projName={this.props.currentTeamName} />
            {!this.state.hasConfig && (
              <InformationalNote message={alertConstants.NO_CONFIG} />
            )}

            {/** add button */}
            {this.state.hasConfig && (
              
             
              <ButtonGroup
                btnNames={this.state.btnNames}
                clickHandler={this.handleBtnGroupClick}
                selected={this.state.btnSelected}
              />            
            )}
            <Spin
              spinning={
                this.props.requestTeamGithubCommits ||
                this.props.requestTeamGithubCommits ||
                this.props.requestTeamGithubCommits
              }
            >
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.DIRECTORY_STRUCTURE && (

                  <div>
                    <Container >
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Files: Number of Lines in Directory</b></h2>
                      <br/>
                      <PolarArea data={polar_data}/>
                    </Container>
                    <br/>
                  </div>

                )
              }
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.DIRECTORY_METRICS && (

                  <div>
                    <Container>
                      <Row>
                        <Col xs="9">
                          <Treemap data = {this.state.dir_data} />
                        </Col>
                        <Col xs="1">
                          <DropdownButton
                              id="dropdown-button-dark-example2"
                              variant="secondary"
                              title="Metrics"
                              className="mt-2"
                            >
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_data})}>Count Line</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_metric_data})}>Count Path</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_data})}>Ratio Comment To Code</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_metric_data})}>Cyclomatic</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_data})}>Essential</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_metric_data})}>Max Nesting</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_data})}>Count Decl Class</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_metric_data})}>Count Decl Executable Unit</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: dir_data})}>Count Decl Function</Dropdown.Item>
                            </DropdownButton>
                          </Col>
                      </Row>
                    </Container>

                    <Container>
                      <Row>
                        <Col xs="4">
                          <RadialBar data = {radial_data} />
                        </Col>
                        <Col xs="7">
                          <RadarChart2 data = {radar_dir_data} />
                        </Col>
                      </Row>
                    </Container>
                    
                  </div>

                )
              }
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.FUNCTION_METRICS && (

                  <div>
                    <Container>
                      <Row>
                        <Col xs="9">
                          <Treemap data = {this.state.func_data} />
                        </Col>
                        <Col xs="1">
                          <DropdownButton
                              id="dropdown-button-dark-example2"
                              variant="secondary"
                              title="Metrics"
                              className="mt-2"
                            >
                              <Dropdown.Item onClick={e => this.setState({func_data: func_data})}>Count Line</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({func_data: func_metric_data})}>Count Path</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({func_data: func_data})}>Ratio Comment To Code</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({func_data: func_metric_data})}>Cyclomatic</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({func_data: func_data})}>Essential</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({func_data: func_metric_data})}>Max Nesting</Dropdown.Item>
                            </DropdownButton>
                          </Col>
                      </Row>
                    </Container>

                    <Container>
                      <Row>
                        <Col xs="4">
                          <RadialBar data = {radial_data} />
                        </Col>
                        <Col xs="7">
                          <RadarChart2 data = {radar_func_data} />
                        </Col>
                      </Row>
                    </Container>
                    
                  </div>

                )
              }
            </Spin>



            {this.state.hasConfig &&
              this.props.teamCodeMetrics &&
              this.props.teamCodeMetrics.length != 0 && (
              <ReverseTable
              data={this.props.teamCodeMetrics}
            />
            )}
            {this.state.hasConfig &&
              (!this.props.teamCodeMetrics ||
                this.props.teamCodeMetrics.length == 0) && (
                <InformationalNote message={alertConstants.NO_DATA} />
              )}
          </div>
        </div>
      </div>
    );
  }
}

/********************************************************************************************/

const polar_data = {

  labels: ['Red.js', 'Blue.js', 'Yellow.js', 'Green.html', 'Purple.css', 'Orange.js'],
  datasets: [
    {
      data: [12, 17, 3, 5, 9, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.8)',
        'rgba(54, 162, 235, 0.8)',
        'rgba(255, 206, 86, 0.8)',
        'rgba(75, 192, 192, 0.8)',
        'rgba(153, 102, 255, 0.8)',
        'rgba(255, 159, 64, 0.8)',
      ],
      borderWidth: 1,
    }
  ],
};


const radial_data = {
  series: [44, 50],
  options: {
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
              // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
              return String(w.globals.seriesTotals.reduce((a, b) => {return a + b}, 0));
            }
          }
        }
      }
    },
    labels: ['Declarative Statements', 'Executable Statements'],
    colors: ['#68b54a', '#735dde'],
    title: {
      text: "Statments Comparison",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '16px',
        fontWeight:  'bold',
        color:  '#263238'
      },
  }

}};



const radar_func_data = {
    
  series: [{
    name: 'my_func',
    data: [80, 50, 30, 40, 100],
  }, {
    name: 'our_func',
    data: [20, 30, 40, 80, 20],
  }, {
    name: 'your_func',
    data: [44, 76, 78, 13, 43],
  }, {
    name: 'his_func',
    data: [74, 7, 18, 16, 35],
  }, {
    name: 'her_func',
    data: [50, 37, 12, 10, 30],
  }
  ],
  options: {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
    },
    xaxis: {
      categories: ['Blank Line', 'Code Line', 'Declarative Code Line', 'Executable Line', 'Comment Line']
    },
    title: {
      text: "Line Comparison",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '16px',
        fontWeight:  'bold',
        color:  '#263238'
      },
    }
  },


};

const radar_dir_data = {
    
  series: [{
    name: 'App.js',
    data: [80, 50, 30, 40, 100],
  }, {
    name: 'index.html',
    data: [20, 30, 40, 80, 20],
  }, {
    name: 'style.css',
    data: [44, 76, 78, 13, 43],
  }, {
    name: 'Home.js',
    data: [74, 7, 18, 16, 35],
  }
  ],
  options: {
    chart: {
      height: 350,
      type: 'radar',
    },
    title: {
    },
    xaxis: {
      categories: ['Blank Line', 'Code Line', 'Declarative Code Line', 'Executable Line', 'Comment Line']
    },
    title: {
      text: "Line Comparison",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '16px',
        fontWeight:  'bold',
        color:  '#263238'
      },
  }
  },


};

/** Data for directory metrics */
const dir_data = {
  series: [
    {
      data: [
        {
          x: 'App.js',
          y: 318
        },
        {
          x: 'index.html',
          y: 149
        },
        {
          x: 'style.css',
          y: 184
        },
        {
          x: 'Home.js',
          y: 40
        },
      ]
    }
  ],
  options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Files: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
    }
    },
    hasError: false
};

/** Data for directory metrics */
const dir_metric_data = {
  series: [
    {
      data: [
        {
          x: 'App.js',
          y: 9
        },
        {
          x: 'index.html',
          y: 20
        },
        {
          x: 'style.css',
          y: 8
        },
        {
          x: 'Home.js',
          y: 4
        },
      ]
    }
  ],
  options: {
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Files: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
    }
    },
    hasError: false
};


const func_metric_data = {
  series: [
    {
      data: [
        {
          x: 'my_func',
          y: 30
        },
        {
          x: 'our_func',
          y: 80
        },
        {
          x: 'your_func',
          y: 20
        },
        {
          x: 'his_func',
          y: 20
        },
        {
          x: 'her_func',
          y: 20
        },
      ]
    }
  ],
  options: {
      colors: [
      '#ff9eed'],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Functions: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
    }
    },
    hasError: false
};



/** Data for function metrics */
const func_data = {
  series: [
    {
      data: [
        {
          x: 'my_func',
          y: 80
        },
        {
          x: 'our_func',
          y: 149
        },
        {
          x: 'your_func',
          y: 60
        },
        {
          x: 'his_func',
          y: 40
        },
        {
          x: 'her_func',
          y: 50
        },
      ]
    }
  ],
  options: {
      colors: [
      '#ff9eed'],
      legend: {
        show: false
      },
      chart: {
        height: 350,
        type: 'treemap'
      },
      title: {
        text: "Top 10 Functions: Choose Metrics to View Various Comparison",
        align: 'left',
        margin: 10,
        offsetX: 0,
        offsetY: 0,
        floating: false,
        style: {
          fontSize:  '20px',
          fontWeight:  'bold',
          color:  '#263238'
        },
    }
    },
    hasError: false
};

/********************************************************************************************/



function mapState(state) {
  return {
    teamCodeMetrics: state.user.teamCodeMetrics,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,


    requestTeamGithubCommits: state.user.requestTeamGithubCommits,
  };
}

const actionCreators = {
  getTeamCodeMetrics: userActions.getTeamCodeMetrics,


  getTeamGithubCommits: userActions.getTeamGithubCommits,
};

const ProductQuality = connect(mapState, actionCreators)(ProductQualityPage);
export { ProductQuality as ProductQualityPage };
