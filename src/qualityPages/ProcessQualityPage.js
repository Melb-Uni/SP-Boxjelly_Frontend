import React from "react";
import ButtonGroup from "../_utils/ButtonGroup";
import Banner from "../_utils/Banner";
import LineChart from "../_utils/LineChart";
import uomHeader from "../header/uomheader.js";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import { commonConstants } from "../_constants";
import { ToastContainer } from "react-toastify";
import { Spin } from "antd";
import { InformationalNote } from "../_utils/Alert";
import { alertConstants } from "../_constants";

import { Button } from "bootstrap";

/** new added */
import DonutChart from "../_utils/DonutChart";
import CalendarHeatmap from "../_utils/CalendarHeatmap";
import { Tab, Col, Row, Container, DropdownButton, Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import burnup from "../_utils/icons/Burnup_Chart.png";
import burndown from "../_utils/icons/Burndown_Chart.png";
import CalendarHeatmap2 from "../_utils/CalendarHeatmap2";
import AreaChart from "../_utils/AreaChart";
import DonutChart2 from "../_utils/DonutChart2";


class ProcessQualityPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      btnNames: [
        commonConstants.CONFLUENCE,
        commonConstants.GITHUB,
        commonConstants.JIRA,
      ],

      /** extra buttons */
      /*
      btnNames2: [
        commonConstants.JIRA_VISUALIZATION,
        commonConstants.CALENDAR,
      ],
      */
      

      btnSelected: commonConstants.CONFLUENCE,
      scrollPosition: 0,
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],

      //timespent: all_timespent,
      doc_time: all_doc_time,
    };

    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleBtnGroupClick(e) {
    let selected = e.currentTarget.firstChild.innerHTML;
    if (selected == commonConstants.CONFLUENCE) {
      this.props.getTeamConfluencePages(this.props.currentTeamKey);
    } else if (selected == commonConstants.GITHUB) {
      this.props.getTeamGithubCommits(this.props.currentTeamKey);
    
    // } else if (selected == commonConstants.JIRA_VISUALIZATION) {
    //  this.props.getTeamJiraTickets(this.props.currentTeamKey);
    




    } else {
      this.props.getTeamJiraTickets(this.props.currentTeamKey);
    }
    this.setState({
      btnSelected: selected,
    });
  }

  handleScroll() {
    this.setState({
      scrollPosition: window.pageYOffset,
    });
  }

  handleUpClick = () => {
    window.open("https://react-bootstrap.github.io/components/buttons/");
  };

  handleDownClick = () => {
    window.open("https://react-bootstrap.github.io/components/button-group/");
  }; 

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamConfluencePages(this.props.currentTeamKey);
    }
    //comment previous 
    //window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    window.scrollTo(0, parseInt(this.state.scrollPosition));
  }

  

  render() {
    return (
      <div className="uomcontent">
        {uomHeader("Process Quality")}
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

              /** add extra buttons here */
              /**
              <div>
              <ButtonGroup 
                btnNames={this.state.btnNames2}
                clickHandler={this.handleBtnGroupClick}
                selected={this.state.btnSelected}/>
              </div>
              */
              

            )}
            <Spin
              spinning={
                this.props.requestTeamConfluencePages ||
                this.props.requestTeamGithubCommits ||
                this.props.requestTeamJiraTickets
              }
            >
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.CONFLUENCE && (
                  
                  /** Confluence Heap Map */
                  /** Confluence Time spend - Line graph */
                  <div>
                    <Container>
                      <Row>
                        <LineChart data={this.props.confluenceData} />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                      </Row>

                      

                      <Row>
                        <Col xs="9">
                          <AreaChart data={this.state.doc_time} />
                        </Col>
                        <Col xs="1">
                          <DropdownButton
                              id="dropdown-button-dark-example2"
                              variant="secondary"
                              title="Document"
                              className="mt-2"
                            >
                              <Dropdown.Item onClick={e => this.setState({doc_time: all_doc_time})}>Total</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({doc_time: one_doc_time})}>Project Requirement</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({doc_time: two_doc_time})}>Design Concept</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({doc_time: one_doc_time})}>Architecture</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({doc_time: two_doc_time})}>Product Backlog</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({doc_time: one_doc_time})}>Risk Management</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({doc_time: two_doc_time})}>Quality Assurance</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({doc_time: one_doc_time})}>Sprint Summary</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({doc_time: two_doc_time})}>Meeting Notes</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({doc_time: one_doc_time})}>API Documents</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({doc_time: two_doc_time})}>Deployment</Dropdown.Item>                       
                            </DropdownButton>
                        </Col>
                          
                      </Row>
                        
                      
                      {/* <Row>
                          <LineChart data={this.state.timespent} />
                      </Row> */}
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                    
                      <CalendarHeatmap values={randomValues}/>
                      <CalendarHeatmap2 values={randomValues}/>

                    </Container>

                  </div>
                )}
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.GITHUB && (

                  /** Github Heap Map */

                  <div>
                    <Container>
                        <Row>
                          <LineChart data={this.props.githubData} />
                          <br/>
                          <br/>
                          <br/>
                          <br/>
                        </Row>

                        <CalendarHeatmap values={randomValues}/>
                        <CalendarHeatmap2 values={randomValues}/>
                      
                    </Container>
                  </div>


                )}
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.JIRA && (
                  
                  /** Jira Pie Chart */
                  /** Jira Heap Map */
                  /** Jira Report Button */

                  <div>
                    <Container>
                      <Row>
                        <LineChart data={this.props.jiraData} />
                        <br/>
                        <br/>
                      </Row>
                      
                      {/*
                      <Row>
                        <h3>Card Status in Jira Board</h3>
                      <DonutChart data={data} options={{height: "100"}} />*/}
                        {/**<DonutChart data={data} options={{height: "100"}} /> */}
                      {/*
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                      </Row>
                      */}
                      
                      <Row className="justify-content-center" >
                        
                          <DonutChart2 data={donut_data}/>
                        

                      
                      </Row>
                      
                      <br/>
                      <br/>
                      <br/>
                      <br/>
                      


                      <CalendarHeatmap values={randomValues}/>
                      <CalendarHeatmap2 values={randomValues}/>

                        <h3>Click to Direct to Jira Report</h3>
                        <br/>
                        <br/>
                      
                      

                      <Row>


                        <Col>
                          <button><img src={burnup} alt="Burnup Chart" onClick={this.handleUpClick} /></button>
                        </Col>
                        <Col>
                          <button><img src={burndown} alt="Burndown Chart" onClick={this.handleDownClick}/></button>
                        </Col>

                        
                      </Row>
                    </Container>

                  </div>
                )}





            </Spin>
          </div>
        </div>
        <ToastContainer limit={1} />
      </div>
    );
  }
}



/** Confluence total time spent for a week Dummy Data*/

const today = new Date();
const week = getWeek(today);

function getWeek(today){
  let week = [];
  for(let i = 7; i > 0; i--){
    week.push(shiftDate(today, -i).toISOString().slice(0, 10));
  }
  return week;
}

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

const all_doc_time = {

  series: [{
    name: 'Total Time Spent (minutes)',
    data: [50, 54, 70, 76, 78, 80, 82],
  }],
  options: {
    chart: {
    type: 'area',
    height: 350,
    zoom: {
        enabled: false
    }
    },
    dataLabels: {
    enabled: false
    },
    colors: ['#FF7F00'],
    stroke: {
    curve: 'straight'
    },
    
    title: {
    text: 'Document Time Spent',
    align: 'left'
    },
    labels: week,
    xaxis: {
    type: 'datetime',
    },
    yaxis: {
    opposite: true
    },
    legend: {
    horizontalAlign: 'left'
    }
},

};

const one_doc_time = {

  series: [{
    name: 'Doc1 Time Spent (minutes)',
    data: [5, 5, 7, 7, 8, 10, 12],
  }],
  options: {
    chart: {
    type: 'area',
    height: 350,
    zoom: {
        enabled: false
    }
    },
    dataLabels: {
    enabled: false
    },
    colors: ['#FF7F00'],
    stroke: {
    curve: 'straight'
    },
    
    title: {
    text: 'Document Time Spent',
    align: 'left'
    },
    labels: week,
    xaxis: {
    type: 'datetime',
    },
    yaxis: {
    opposite: true
    },
    legend: {
    horizontalAlign: 'left'
    }
},

};

const two_doc_time = {

  series: [{
    name: 'Doc2 Time Spent (minutes)',
    data: [1, 4, 7, 7, 7, 8, 8],
  }],
  options: {
    chart: {
    type: 'area',
    height: 350,
    zoom: {
        enabled: false
    }
    },
    dataLabels: {
    enabled: false
    },
    colors: ['#FF7F00'],
    stroke: {
    curve: 'straight'
    },
    
    title: {
    text: 'Document Time Spent',
    align: 'left'
    },
    labels: week,
    xaxis: {
    type: 'datetime',
    },
    yaxis: {
    opposite: true
    },
    legend: {
    horizontalAlign: 'left'
    }
},

};


/*
const all_timespent = {     
    labels: week,
    datasets: [{
       label: 'Total Time Spent (minutes)',
       data: [50, 54, 70, 76, 78, 80, 82],
       backgroundColor: "rgba(75,192,192,0.2)",
       borderColor: "rgba(75,192,192,1)"
     }]
   };

  const one_timespent = {     
  labels: week,
  datasets: [{
      label: 'Total Time Spent (minutes)',
      data: [5, 5, 7, 7, 8, 10, 12],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }]
  };

  const two_timespent = {     
  labels: week,
  datasets: [{
      label: 'Total Time Spent (minutes)',
      data: [1, 4, 7, 7, 7, 8, 8],
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)"
    }]
  };
*/


function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomValues = getRange(200).map(index => {
  return {
    date: shiftDate(today, -index),
    count: getRandomInt(0, 4),

    // tooltip - value.
    // who, what commit comment, time, update/modify, url
  };
});
  
/** Jira Pie Chart Dummy Data */
/** DonutChart
const data = {     
  labels: [
       'To Do',
       'Doing',
       'Done'
     ],
     datasets: [{
       label: 'Card Status',
       data: [300, 50, 100],
       backgroundColor: [
         'rgb(255, 99, 132)',
         'rgb(54, 162, 235)',
         'rgb(255, 205, 86)'
       ],
       hoverOffset: 4
     }]
   };
 */

  const donut_data = {
    
  series: [20, 17, 9],
  options: {
    chart: {
      type: 'donut',
    },
    labels: [
      'To Do',
      'Doing',
      'Done'
    ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          height: 400,
          width: 400,
        },
        legend: {
          position: 'bottom'
        }
      }
    }],
    title: {
      text: "Board Card Status: Click to View Card List",
      align: 'left',
      margin: 15,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '15px',
        fontWeight:  'bold',
        color:  '#263238'
      },
    },
    colors: ['#ff82a5', '#ffe873', '#54d9f7'],
    tooltip: {
      y: {
        formatter: function (val) {
          return val + " - task_name"
        }
      }
    }
  },
  }

function mapState(state) {
  return {
    requestTeamConfluencePages: state.user.requestTeamConfluencePages,
    requestTeamGithubCommits: state.user.requestTeamGithubCommits,
    requestTeamJiraTickets: state.user.requestTeamJiraTickets,
    confluenceData: state.user.teamConfluencePages,
    githubData: state.user.teamGithubCommits,
    jiraData: state.user.teamJiraTickets,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,
  };
}

const actionCreators = {
  getTeamConfluencePages: userActions.getTeamConfluencePages,
  getTeamGithubCommits: userActions.getTeamGithubCommits,
  getTeamJiraTickets: userActions.getTeamJiraTickets,
};

const qualityPage = connect(mapState, actionCreators)(ProcessQualityPage);
export { qualityPage as ProcessQualityPage };