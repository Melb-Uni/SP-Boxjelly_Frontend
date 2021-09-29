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
//import {Card, Nav, Button, CardGroup} from "react-bootstrap";
import { Spin } from "antd";
import {CardGroup} from "react-bootstrap";
import Card from "../_utils/Card";

class IndividualContributionPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projectName: "",
      btnNames: [
        commonConstants.TASK_COMPARISON,
        commonConstants.USER_COMPARISON,
        commonConstants.MORE_DETAILS,
      ],
      btnSelected: commonConstants.TASK_COMPARISON,
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],
      
      radar_all_data: radar_all_data,
      selectedStudent: "All",
    };

    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
  }

  handleBtnGroupClick(e) {
    let selected = e.currentTarget.firstChild.innerHTML;
    /*
      this.props.getGithubIndividualData(this.props.currentTeamKey);
      this.props.getConfluenceIndividualData(this.props.currentTeamKey)
      this.props.getJiraIndividualData(this.props.currentTeamKey);
    }*/
    this.setState({
      btnSelected: selected,
    });
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
            {this.state.hasConfig && (
              <ButtonGroup
                btnNames={this.state.btnNames}
                clickHandler={this.handleBtnGroupClick}
                selected={this.state.btnSelected}
              />
             )}

           {/* <Spin
              spinning={
                this.props.individualGithubData ||
                this.props.individualConfluenceData ||
                this.props.individualJiraData
              }
            > */}
            {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.TASK_COMPARISON && (
                  <Container>
                    <ColumnChart data={column_all_data} />
                  </Container>
            )}
            {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.USER_COMPARISON && 
                typeof this.props.individualConfluenceData !== "undefined" &&
                JSON.stringify(this.props.individualConfluenceData) !==
                "{}" &&(
                  <Container>
                    <Row>
                     <h3>Previous Group Confluence Data</h3>
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
                      </Row>
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      <br/>

                     <RadarChart2 data={this.state.radar_all_data} />
                     <ColumnChart data={horizontal_all_data} />

                     
                     
                  </Container>
            )}
            {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.MORE_DETAILS && (
                  <Container>
                    <Row>

                      <CardGroup>
                        <Card 
                          border={'primary'}
                          title={'Latest Commits'}
                          time={'Last updated 3 mins ago'}
                          data={latest_commit}
                        />

                        <Card 
                          border={'danger'}
                          title={'Most Document Updated'}
                          time={'Last updated 10 mins ago'}
                          data={latest_document}
                        />

                        <Card 
                          border={'danger'}
                          title={'Most Document Modified'}
                          time={'Last updated 60 mins ago'}
                          data={latest_document}
                        />

                        <Card 
                          border={'success'}
                          title={'Most Card Tag'}
                          time={'Last updated 7 mins ago'}
                          data={latest_card}
                        />

                        {/**
                        <Card 
                          border={'warning'}
                          title={'Most Frequent Word'}
                          time={'Last updated 3 mins ago'}
                          data={latest_document}
                        />
                        */}
                      </CardGroup>
                      </Row>
                  </Container>

            )}
          </div>
        </div>
      </div>
    );
  }
}

const latest_commit = [
  "user1: This is a latest commits", 
  "user2: This is a latest commits", 
  "user3: This is a latest commits", 
  "user4: This is a latest commits", 
  "user5: This is a latest commits"];

const latest_document = [
  "user1: Document Name", 
  "user2: Document Name", 
  "user3: Document Name", 
  "user4: Document Name", 
  "user5: Document Name"];

const latest_card = [
  "user1: Card Tag Name", 
  "user2: Card Tag Name", 
  "user3: Card Tag Name", 
  "user4: Card Tag Name", 
  "user5: Card Tag Name"];

const all_data = [{
  name: 'user1',
  data: [40, 23, 20, 21, 15, 11],
}, {
  name: 'user2',
  data: [15, 23, 17, 15, 30, 15],
}, {
  name: 'user3',
  data: [10, 20, 21, 25, 21, 30],
}, {
  name: 'user4',
  data: [10, 24, 21, 17, 17, 30],
}, {
  name: 'user5',
  data: [25, 10, 21, 22, 17, 14],
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
      text: "Team Radar Chart: Hover the Name to View Individual",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '15px',
        fontWeight:  'bold',
        //fontFamily:  undefined,
        color:  '#263238'
      },
    },
    xaxis: {
      categories: ['Document Updated', 'Document Modified', 'Meeting Attendance', 'Number of Commits', 'Total Code lines', 'Cards Assignment']
    }, legend: {
      position: 'bottom',
      fontsize: 10,
    },
  },
};

const horizontal_all_data = {
    
  series: all_data,
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
    title: {
      text: "Team Bar Chart: Hover the Legend to Show User, Click to Remove the User",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '15px',
        fontWeight:  'bold',
        //fontFamily:  undefined,
        color:  '#263238'
      },
    },
    yaxis: { 
      show: true,
      title: {
        text: "% of Tasks",
      },
      style: {
        fontWeight: 'normal',
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
        horizontal: true,
        borderRadius: 10
      },
    },
    xaxis: {
      categories: ['Document Updated', 'Document Modified', 'Meeting Attendance', 'Number of Commits', 'Total Code lines', 'Cards Assignment']
    },
    //colors: ['#ff3224', '#ffae00', '#f8ff38', '#8eff38', '#38ffdb', '#386aff'],
    // use default color
    legend: {
      position: 'bottom',
      fontsize: 10,
      /*
      // use default color
      markers: {
        fillColors: ['#ff3224', '#ffae00', '#f8ff38', '#8eff38', '#38ffdb', '#386aff']
      }
      */
    },
    fill: {
      opacity: 1
    }
  },


};

const column_all_data = {
    
  series: [{
    name: 'Document Updated',
    data: [40, 15, 10, 10, 25]
  }, {
    name: 'Document Modified',
    data: [23, 23, 20, 24, 12]
  }, {
    name: 'Meeting Attendance',
    data: [20, 17, 21, 21, 21]
  }, {
    name: 'Number of Commits',
    data: [21, 15, 25, 17, 22]
  }, {
    name: 'Total Code lines',
    data: [15, 30, 21, 17, 17]
  }, {
    name: 'Cards Assignment',
    data: [11, 15, 30, 30, 14]
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
    title: {
      text: "Team Bar Chart: Hover the Legend to Compare Task",
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '15px',
        fontWeight:  'bold',
        //fontFamily:  undefined,
        color:  '#263238'
      },
    },
    yaxis: { 
      show: true,
      title: {
        text: "% of Tasks",
      },
      style: {
        fontWeight: 'normal',
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
    colors: ['#f03b20', '#feb24c', '#ffeda0', '#2b8cbe', '#a6bddb', '#a1d99b'],
    legend: {
      position: 'right',
      offsetY: 40,
      fontsize: 10,
      markers: {
        fillColors: ['#f03b20', '#feb24c', '#ffeda0', '#2b8cbe', '#a6bddb', '#a1d99b']
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