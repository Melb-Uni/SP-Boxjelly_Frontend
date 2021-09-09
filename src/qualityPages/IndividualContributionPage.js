import React from "react";
import uomHeader from "../header/uomheader.js";
import { connect } from "react-redux";
import { userActions } from "../_actions";
import { Tab, Col, Row, Container } from "react-bootstrap";
import ButtonGroup from "../_utils/ButtonGroup";
import { commonConstants } from "../_constants";
import { ToastContainer } from "react-toastify";
import Banner from "../_utils/Banner";
import DonutChart from "../_utils/DonutChart";
import DropdownMenus from "../_utils/DropdownMenus";
import { InformationalNote } from "../_utils/Alert";
import { alertConstants } from "../_constants";

import RadarChart from "../_utils/RadarChart";
import RadarChart2 from "../_utils/RadarChart2";
import ColumnChart from "../_utils/ColumnChart";
import Column from "antd/lib/table/Column";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card, Nav, Button, CardGroup} from "react-bootstrap";

class IndividualContributionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      btnNames: [
        commonConstants.CONFLUENCE,
        commonConstants.GITHUB,
        commonConstants.JIRA,
      ],
      btnSelected: commonConstants.CONFLUENCE,
      selectedStudent: "All",
      studentList: [],
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],
    };

    this.selectStudent = this.selectStudent.bind(this);
    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
  }

  handleBtnGroupClick(e) {
    let picked = e.currentTarget.firstChild.innerHTML;
    if (picked === commonConstants.CONFLUENCE) {
      this.props.getConfluenceIndividualData(this.props.currentTeamKey);
    } else if (picked === commonConstants.GITHUB) {
      this.props.getGithubIndividualData(this.props.currentTeamKey);
    } else {
      this.props.getJiraIndividualData(this.props.currentTeamKey);
    }
    this.setState({
      btnSelected: picked,
      selectedStudent: "All",
    });
  }

  selectStudent(e) {
    this.setState({ selectedStudent: e.target.value });
  }

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getConfluenceIndividualData(this.props.currentTeamKey);
    }
  }

  render() {
    return (
      
      <div className="uomcontent">
        <ToastContainer limit={1} />
        {uomHeader("Individual Contribution")}
        <div role="main">
          <div className="page-inner">
            <Banner projName={this.props.currentTeamName} />
            {!this.state.hasConfig && (
              <InformationalNote message={alertConstants.NO_CONFIG} />
            )}

             {/**+++++++++++++++++++++++++++++++++++++++++++++++++++ */}


            {this.state.hasConfig && (
              <Container>
                <Tab.Container id="left-tabs-example">
                  <Row>
                    <Col>
                      <ButtonGroup
                        btnNames={this.state.btnNames}
                        clickHandler={this.handleBtnGroupClick}
                        selected={this.state.btnSelected}
                      />
                    </Col>
                    <Col>
                      {this.state.btnSelected === commonConstants.CONFLUENCE &&
                        typeof this.props.individualConfluenceData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualConfluenceData) !==
                          "{}" && (
                          <DropdownMenus
                            data={
                              this.props.individualConfluenceData["All"].labels
                            }
                            onChange={this.selectStudent}
                            value={this.state.selectedStudent}
                          />                          
                        )}
                      {this.state.btnSelected === commonConstants.GITHUB &&
                        typeof this.props.individualGithubData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualGithubData) !==
                          "{}" && (
                          <DropdownMenus
                            data={this.props.individualGithubData["All"].labels}
                            onChange={this.selectStudent}
                            value={this.state.selectedStudent}
                          />
                        )}

                      {this.state.btnSelected === commonConstants.JIRA &&
                        typeof this.props.individualJiraData !== "undefined" &&
                        JSON.stringify(this.props.individualJiraData) !==
                          "{}" && (
                          <DropdownMenus
                            data={this.props.individualJiraData["All"].labels}
                            onChange={this.selectStudent}
                            value={this.state.selectedStudent}
                          />
                        )}
                    </Col>
                  {/** when select individual */}
                    <Col>
                      {this.state.btnSelected === commonConstants.CONFLUENCE &&
                        typeof this.props.individualConfluenceData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualConfluenceData) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualConfluenceData[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                            dataLabel={"Edited Pages"}
                          />
                        )}
                      {this.state.btnSelected === commonConstants.GITHUB &&
                        typeof this.props.individualGithubData !==
                          "undefined" &&
                        JSON.stringify(this.props.individualGithubData) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualGithubData[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                            dataLabel={"Number of Commits"}
                          />
                        )}
                      {this.state.btnSelected === commonConstants.JIRA &&
                        typeof this.props.individualJiraData !== "undefined" &&
                        JSON.stringify(this.props.individualJiraData) !==
                          "{}" && (
                          <DonutChart
                            data={JSON.parse(
                              JSON.stringify(
                                this.props.individualJiraData[
                                  this.state.selectedStudent
                                ]
                              )
                            )}
                            dataLabel={"Completed Tasks"}
                          />
                        )}
                    </Col>
                  </Row>

                   {/**+++++++++++++++++++++++++++++++++++++++++++++++++++ */}
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <br/>
                  <h1>Current Design -------------------------------- </h1>
                  
                  <Row>
                    <Col>
                      <ColumnChart data={column_all_data} />
                    </Col>
                    <Col>
                      <RadarChart2 data={radar_all_data} />
                    </Col>
                  </Row>

                  <br/>
                  <br/>
                  <br/>

                  <Row>

                  <CardGroup>
                    <div className='m-2'>
                      <Card border={'primary'}>

                        <Card.Body>
                          <Card.Title><small> Latest Commits</small></Card.Title>
                          <Card.Text>
                            This is a latest commits
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                      </Card>
                    </div>

                    <div className='m-2'>
                      <Card border={'danger'}>
                        <Card.Body>
                          <Card.Title><small>Most Document Updated</small></Card.Title>
                          <Card.Text>
                            Document Name
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 10 mins ago</small>
                        </Card.Footer>
                      </Card>
                      </div>

                      <div className='m-2'>
                      <Card border={'danger'}>
                        <Card.Body>
                          <Card.Title><small>Most Document Modified</small></Card.Title>
                          <Card.Text>
                            Document Name
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 1 hour ago</small>
                        </Card.Footer>
                      </Card>
                    </div>
                    
                    <div className='m-2'>
                      <Card border={'success'}>
                        <Card.Body>
                          <Card.Title><small>Most Card tag</small></Card.Title>
                          <Card.Text>
                            High Priority
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 7 mins ago</small>
                        </Card.Footer>
                      </Card>
                    </div>

                    <div className='m-2'>         
                      <Card border={'warning'}>
                        <Card.Body>
                          <Card.Title><small>Most Frequent Word</small></Card.Title>
                          <Card.Text>
                            Sprint
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">Last updated 3 mins ago</small>
                        </Card.Footer>
                      </Card>
                    </div>


                  </CardGroup>





                  </Row>


                </Tab.Container>
              </Container>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const all_data = [{
  name: 'user1',
  data: [44, 13, 11, 21, 41, 11],
}, {
  name: 'user2',
  data: [55, 23, 17, 7, 50, 15],
}, {
  name: 'user3',
  data: [41, 20, 15, 25, 21, 35],
}, {
  name: 'user4',
  data: [67, 8, 15, 13, 73, 30],
}, {
  name: 'user5',
  data: [22, 13, 21, 22, 32, 12],
}
];

const radar_all_data = {
    
  series: all_data,
  // series: [all_data[0]],
  options: {
    chart: {
      height: 1000,
      type: 'radar',
    },
    title: {
    },
    xaxis: {
      categories: ['Document Modification', 'Task Assignment(@)', 'Meeting Attendance', 'Number of Commits', 'Total Code lines', 'Cards Assignment']
    }, legend: {
      position: 'bottom',
      fontsize: 10,
    },
  },
};


const column_all_data = {
    
  series: [{
    name: 'Document Modification',
    data: [44, 55, 41, 67, 22]
  }, {
    name: 'Task Assignment (@)',
    data: [13, 23, 20, 8, 13]
  }, {
    name: 'Meeting Attendance',
    data: [11, 17, 15, 15, 21]
  }, {
    name: 'Number of Commits',
    data: [21, 7, 25, 13, 22]
  }, {
    name: 'Total Code lines',
    data: [41, 50, 21, 73, 32]
  }, {
    name: 'Cards Assignment',
    data: [11, 15, 35, 30, 12]
  }


  ],
  options: {
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
      events: {
        dataPointSelection: function (event, chartContext, config) {
          console.log(chartContext);
          
          // tasks
          console.log(config.seriesIndex);
          
          // user
          console.log(config.dataPointIndex);
        }
      }
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
      categories: ['user1', 'user2', 'user3', 'user4', 'user5'
      ],
    },
    colors: ['#ff3224', '#ffae00', '#f8ff38', '#8eff38', '#38ffdb', '#386aff'],
    legend: {
      position: 'right',
      offsetY: 40,
      fontsize: 10,
      markers: {
        fillColors: ['#ff3224', '#ffae00', '#f8ff38', '#8eff38', '#38ffdb', '#386aff']
      }
    },
    fill: {
      opacity: 1
    }
  },


};



function mapState(state) {
  return {
    individualGithubData: state.user.individualGitHubCommits,
    individualConfluenceData: state.user.individualConfluencePages,
    individualJiraData: state.user.individualJiraCounts,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,
  };
}

const actionCreators = {
  getGithubIndividualData: userActions.getGithubIndividualData,
  getConfluenceIndividualData: userActions.getConfluenceIndividualData,
  getJiraIndividualData: userActions.getJiraIndividualData,
};

const Product = connect(mapState, actionCreators)(IndividualContributionPage);
export { Product as IndividualContributionPage };
