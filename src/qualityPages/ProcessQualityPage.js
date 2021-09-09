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
import { Button, Dropdown } from "bootstrap";

/** new added */
import DonutChart from "../_utils/DonutChart";
import CalendarHeatmap from "../_utils/CalendarHeatmap";
import { Tab, Col, Row, Container, DropdownButton } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import burnup from "../_utils/icons/Burnup_Chart.png";
import burndown from "../_utils/icons/Burndown_Chart.png";



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
                        <h3>Total Time Spent</h3>
                        <LineChart data={timespent} />
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                      </Row>
                    
                      <CalendarHeatmap />
                      <CalendarHeatmap />

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
                      
                        <CalendarHeatmap />
                        <CalendarHeatmap />
                      
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
                      
                      <Row>
                        <h3>Card Status in Jira Board</h3>
                        <DonutChart data={data} options={{height: "100"}} />
                        {/**<DonutChart data={data} options={{height: "100"}} /> */}
                        <br/>
                        <br/>
                        <br/>
                        <br/>

                      </Row>

          
                        <CalendarHeatmap />
                        <CalendarHeatmap />

                        
                        <h3>Report</h3>
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

const timespent = {     
    labels: week,
    datasets: [{
       label: 'Total Time Spent (minutes)',
       data: [50, 54, 70, 76, 78, 80, 82],
       backgroundColor: "rgba(75,192,192,0.2)",
       borderColor: "rgba(75,192,192,1)"
     }]
   };



/** Jira Pie Chart Dummy Data */
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
