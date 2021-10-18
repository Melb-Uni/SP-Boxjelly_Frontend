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
import { Spin } from "antd";
//import Card from "../_utils/Card";
import CardGroup from "../_utils/CardGroup";
import {latest_commit, latest_document, latest_card, radar_all_data, 
  horizontal_all_data, column_all_data} from "../_utils/DummyData";
import TaskStackedBar from "../_utils/TaskStackedBar";
import UserHorizontalBar from "../_utils/UserHorizontalBar";


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

    if (selected == commonConstants.TASK_COMPARISON){
      this.props.getTaskComparisonIndividualContribution(this.props.currentTeamKey);
    } else if(selected == commonConstants.USER_COMPARISON){
      this.props.getUserComparisonIndividualContribution(this.props.currentTeamKey);

    } else {

    }

    
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
      //this.props.getConfluenceIndividualData(this.props.currentTeamKey);
      this.props.getTaskComparisonIndividualContribution(this.props.currentTeamKey);
      this.props.getUserComparisonIndividualContribution(this.props.currentTeamKey);
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
                    <TaskStackedBar data={this.props.individualTaskComparison} />
                  </Container>
            )}
            {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.USER_COMPARISON && 
                // typeof this.props.individualConfluenceData !== "undefined" &&
                // JSON.stringify(this.props.individualConfluenceData) !==
                // "{}" &&
                (
                  <Container>
                    {/* <Row>
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
                      <hr className="solid"></hr>
                      <br/>
                      <br/> */}
                      <UserHorizontalBar data={this.props.individualUserComparison} />

                     <RadarChart2 data={this.state.radar_all_data} />

                      <br/>
                      <br/>
                      <hr className="solid"></hr>
                      <br/>
                      <br/>

                     <ColumnChart data={horizontal_all_data} />

                     
                     
                  </Container>
            )}
            {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.MORE_DETAILS && (
                  <Container>
                    <Row>
                      <CardGroup
                        borders = {['primary', 'danger', 'danger', 'success']}
                        titles = {['Latest Commits','Most Document Updated', 'Most Document Modified', 'Most Card Tag']}
                        times = {['Last updated 3 mins ago', 'Last updated 10 mins ago', 'Last updated 60 mins ago', 'Last updated 7 mins ago']}
                        data = {[latest_commit, latest_document, latest_document, latest_card]}
                      />
                      {/**
                      <Card 
                        border={'warning'}
                        title={'Most Frequent Word'}
                        time={'Last updated 3 mins ago'}
                        data={latest_document}
                      />
                      */}
                    </Row>
                  </Container>
            )}
            {this.state.hasConfig &&
              (!this.props.individualTaskComparison ||
                this.props.individualTaskComparison == 0) && 
                (!this.props.individualUserComparison ||
                  this.props.individualUserComparison.length == 0) && (
                <InformationalNote message={alertConstants.COLLECTING_DATA} />
              )}
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    // individualGithubData: state.user.individualGitHubCommits,
    // individualConfluenceData: state.user.individualConfluencePages,
    // individualJiraData: state.user.individualJiraCounts,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,


    requestTaskComparison: state.user.individualTaskComparison,
    individualTaskComparison: state.user.taskComparison,

    requestUserComparison: state.user.individualUserComparison,
    individualUserComparison: state.user.userComparison,

  };
}

const actionCreators = {
  // getGithubIndividualData: userActions.getGithubIndividualData,
  // getConfluenceIndividualData: userActions.getConfluenceIndividualData,
  // getJiraIndividualData: userActions.getJiraIndividualData,
  
  getTaskComparisonIndividualContribution: userActions.getTaskComparisonIndividualContribution,
  getUserComparisonIndividualContribution: userActions.getUserComparisonIndividualContribution,

};

const Product = connect(mapState, actionCreators)(IndividualContributionPage);
export { Product as IndividualContributionPage };