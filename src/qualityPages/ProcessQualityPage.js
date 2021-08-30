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

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamConfluencePages(this.props.currentTeamKey);
    }
    window.addEventListener("scroll", this.handleScroll);
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
                  <div>
                    <LineChart data={this.props.confluenceData} />
                    <CalendarHeatmap />
                  </div>
                )}
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.GITHUB && (

                  /** Github Heap Map */

                  <div>
                    <LineChart data={this.props.githubData} />
                    <CalendarHeatmap />
                  </div>


                )}
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.JIRA && (
                  
                  /** Jira Pie Chart */
                  /** Jira Heap Map */
                  <div>
                    
                    <LineChart data={this.props.jiraData} />
                    <DonutChart data={data} />
                    <CalendarHeatmap />

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




/** Jira Pie Chart Dummy Data */
const data = {     
  labels: [
       'To Do',
       'Doing',
       'Done'
     ],
     datasets: [{
       label: 'My First Dataset',
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
