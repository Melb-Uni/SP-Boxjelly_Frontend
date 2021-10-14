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
import {polar_data, radial_data, radar_func_data, radar_dir_data, dir_data, 
  dir_metric_data, func_metric_data, func_data} from "../_utils/DummyData";
import NegativeBar from '../_utils/NegativeBar';
import DirectoryRadialBar from '../_utils/DirectoryRadialBar';
import DirectoryRadarChart from "../_utils/DirectoryRadarChart";
import FileColumnChart from "../_utils/FileColumnChart";
import FrontendRadarChart from "../_utils/FrontendRadarChart";
import BackendRadarChart from "../_utils/BackendRadarChart";

class ProductQualityPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      btnNames: [
        commonConstants.DIRECTORY_METRICS,
        commonConstants.FRONTEND_METRICS,
        commonConstants.BACKEND_METRICS,
      ],
      btnSelected: commonConstants.DIRECTORY_METRICS,

      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],

      dir_data: dir_data,
      backend_data: func_data,
    };

    this.handleBtnGroupClick = this.handleBtnGroupClick.bind(this);
  }

  handleBtnGroupClick(e) {
    let selected = e.currentTarget.firstChild.innerHTML;
    if (selected == commonConstants.DIRECTORY_METRICS) {
      this.props.getTeamCodeMetrics(this.props.currentTeamKey);
      this.props.getTenFileCodeMetrics(this.props.currentTeamKey);
    } else if (selected == commonConstants.FRONTEND_METRICS) {
      this.props.getFileCodeMetrics(this.props.currentTeamKey);
      this.setState({dir_data: this.props.fileCodeMetrics[0].countline})
    } else {
      this.props.getFileCodeMetrics(this.props.currentTeamKey);
      this.setState({backend_data: this.props.fileCodeMetrics[1].countline})
    }
    this.setState({
      btnSelected: selected,
    });
  }

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamCodeMetrics(this.props.currentTeamKey);
      this.props.getFileCodeMetrics(this.props.currentTeamKey);
      this.props.getTenFileCodeMetrics(this.props.currentTeamKey);

    }
  }

  render() {
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
                this.props.requestTeamGithubCommits
              }
            >
              {this.state.hasConfig &&
                this.props.teamCodeMetrics &&
                this.props.teamCodeMetrics.length != 0 &&
                this.state.btnSelected == commonConstants.DIRECTORY_METRICS && (

                  <div>
                    <Container >
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Countline JavaScript Files - Frontend</b></h2>
                      <br/>
                      <PolarArea data={this.props.fileTenCodeMetrics[0]}/>
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                        Hover on the slice to view count <br/>
                        Click on the legend to remove <br/>
                      </i></p>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Countline Python Files - Backend</b></h2>
                      <br/>
                      <PolarArea data={this.props.fileTenCodeMetrics[1]}/>
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                        Hover on the slice to view count <br/>
                        Click on the legend to remove <br/>
                      </i></p>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Classes, Executable Unit, Files, Functions & Methods Comparison</b></h2>
                      <NegativeBar data={this.props.teamCodeMetrics}/>
                      <p style={{fontSize: "16px"}}><i>
                        Classes: Number of classes.<br/>
                        Executable Unit: Number of program units with executable code.<br/>
                        Files: Number of files.<br/>
                        Functions: 	Number of functions.<br/>
                        Local Methods: Number of local methods.<br/>
                        Methods: Number of methods, including inherited ones.<br/>
                        <br/>
                        Hover on the slice to view count <br/>
                        Hover on the legend to hightlight <br/>
                        Click on the legend to remove <br/>
                      </i></p>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Line Comparison</b></h2>
                      <DirectoryRadarChart data={this.props.teamCodeMetrics}/>
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                        Hover on the point to view number of code/blank/comment lines <br/>
                      </i></p>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Statement Comparison</b></h2>
                      <DirectoryRadialBar data={this.props.teamCodeMetrics}/>
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                        Hover on the bar to view number of executable/declarative statements <br/>
                        Move cursor on the white space to view total number of statements <br/>
                      </i></p>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Other Metrics</b></h2>
                      <ReverseTable data={this.props.teamCodeMetrics}/>
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                        Path Count: Number of possible paths, not counting abnormal exits or gotos.<br/>
                        <br/>
                        Cyclomatic: Cyclomatic Complexity, also known as McCabe Cyclomatic Complexity or Conditional Complexity,
                        is the measure of the complexity of a function’s decision structure. Cyclomatic Complexity counts the 
                        number of independent paths through a module.<br/>
                        <br/>
                        Essential: Iteratively replaces all well structured control structures with a single statement. 
                        Structures such as if-then-else and while loops are considered well structured.<br/>
                        <br/>
                        Max Nesting: 	Maximum nesting level of control constructs.<br/>
                      </i></p>
                      <br/>
                    </Container>
                    <br/>
                  </div>

                )
              }
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.FRONTEND_METRICS && (

                  <div>
                    <Container>
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Countline JavaScript Files - Frontend</b></h2>
                      <br/>
                      <Row>
                        <Col xs="11">
                          <Treemap data = {this.state.dir_data} />
                        </Col>
                        <Col xs="1">
                          <DropdownButton
                              id="dropdown-button-dark-example2"
                              variant="secondary"
                              title="Metrics"
                              className="mt-2"
                            >
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countline})}>Count Line</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countdeclclass})}>Count Decl Class</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countdeclexecutableunit})}>Count Decl Executable Unit</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countdeclfunction})}>Count Decl Function</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countpath})}>Count Path</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].cyclomatic})}>Cyclomatic</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].essential})}>Essential</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].maxnesting})}>Max Nesting</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].ratiocommenttocode})}>Ratio Comment To Code</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countcode})}>Count Code</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countblank})}>Count Blank</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countcomment})}>Count Comment</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countstmt})}>Count Statement</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countstmtdecl})}>Count Declarative Statement</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({dir_data: this.props.fileCodeMetrics[0].countstmtexe})}>Count Executable Statement</Dropdown.Item>
                            </DropdownButton>
                          </Col>
                        </Row>
                        <br/>
                        <p style={{fontSize: "16px"}}><i>
                        Choose a metric from dropdown menu to view <br/>
                        Hover on the square to view count <br/>
                        If show nothing, every file has a value of zero <br/>
                        </i></p>
                        <br/>

                        <h2 style={{fontSize: "21px"}}><b>Line Comparison</b></h2>
                        <FrontendRadarChart data = {this.props.fileCodeMetrics[0]} />
                        <br/>
                        <p style={{fontSize: "16px"}}><i>
                          Hover on the legend to hightlight one file <br/>
                          Click the legend to exclude one file <br/>
                        </i></p>
                        <br/>

                        <h2 style={{fontSize: "21px"}}><b>Statement Comparison</b></h2>
                        <FileColumnChart data = {this.props.fileCodeMetrics[0]} />
                        <p style={{fontSize: "16px"}}><i>
                          Hover on the bar to view number of executable/declarative statements <br/>
                          Hover on the legend to hightlight a statement type <br/>
                          Click the legend to exclude a statement type<br/>
                        </i></p>
                        <br/>
                    </Container>
                  </div>

                )
              }
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.BACKEND_METRICS && (

                  <div>
                    <Container>
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Countline Python Files - Backend</b></h2>
                      <br/>
                      <Row>
                        <Col xs="11">
                          <Treemap data = {this.state.backend_data} />
                        </Col>
                        <Col xs="1">
                          <DropdownButton
                              id="dropdown-button-dark-example2"
                              variant="secondary"
                              title="Metrics"
                              className="mt-2"
                            >
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countline})}>Count Line</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countdeclclass})}>Count Decl Class</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countdeclexecutableunit})}>Count Decl Executable Unit</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countdeclfunction})}>Count Decl Function</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countpath})}>Count Path</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].cyclomatic})}>Cyclomatic</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].essential})}>Essential</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].maxnesting})}>Max Nesting</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].ratiocommenttocode})}>Ratio Comment To Code</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countcode})}>Count Code</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countcodedecl})}>Count Declarative Code</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countcodeexe})}>Count Executable Code</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countblank})}>Count Blank</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countcomment})}>Count Comment</Dropdown.Item>
                              <Dropdown.Divider />
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countstmt})}>Count Statement</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countstmtdecl})}>Count Declarative Statement</Dropdown.Item>
                              <Dropdown.Item onClick={e => this.setState({backend_data: this.props.fileCodeMetrics[1].countstmtexe})}>Count Executable Statement</Dropdown.Item>
                            </DropdownButton>
                          </Col>
                      </Row>
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                      Choose a metric from dropdown menu to view<br/>
                      Hover on the square to view count <br/>
                      If show nothing, every file has a value of zero <br/>
                      </i></p>
                      <br/>
                      
                      <h2 style={{fontSize: "21px"}}><b>Line Comparison</b></h2>
                      <BackendRadarChart data = {this.props.fileCodeMetrics[1]} />
                      <br/>
                      <p style={{fontSize: "16px"}}><i>
                        Hover on the legend to hightlight one file <br/>
                        Click the legend to exclude one file <br/>
                      </i></p>
                      <br/>

                      <h2 style={{fontSize: "21px"}}><b>Statement Comparison</b></h2>
                      <FileColumnChart data = {this.props.fileCodeMetrics[1]} />
                      <p style={{fontSize: "16px"}}><i>
                        Hover on the bar to view number of executable/declarative statements <br/>
                        Hover on the legend to hightlight a statement type <br/>
                        Click the legend to exclude a statement type<br/>
                      </i></p>
                      <br/>
                    </Container>
                    
                  </div>

                )
              }
            </Spin>
            {/*{this.state.hasConfig &&
              this.props.teamCodeMetrics &&
              this.props.teamCodeMetrics.length != 0 && (
              <ReverseTable
              data={this.props.teamCodeMetrics}
            />
            )}*/}
            {this.state.hasConfig &&
              (!this.props.teamCodeMetrics ||
                this.props.teamCodeMetrics.length == 0) && (
                <InformationalNote message={alertConstants.WAIT_FOR_A_FEW_SECOND_FOR_ANALYZING} />
              )}
          </div>
        </div>
      </div>
    );
  }
}


function mapState(state) {
  return {
    teamCodeMetrics: state.user.teamCodeMetrics,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,

    requestfileCodeMetrics: state.user.fileCodeMetrics,
    fileCodeMetrics: state.user.teamFileCodeMetrics,

    requestTenfileCodeMetrics: state.user.fileTenCodeMetrics,
    fileTenCodeMetrics: state.user.teamTenFileCodeMetrics,

    requestTeamGithubCommits: state.user.requestTeamGithubCommits,
  };
}

const actionCreators = {
  getTeamCodeMetrics: userActions.getTeamCodeMetrics,
  
  getFileCodeMetrics: userActions.getFileCodeMetrics,
  getTenFileCodeMetrics: userActions.getTenFileCodeMetrics,

  getTeamGithubCommits: userActions.getTeamGithubCommits,
};

const ProductQuality = connect(mapState, actionCreators)(ProductQualityPage);
export { ProductQuality as ProductQualityPage };
