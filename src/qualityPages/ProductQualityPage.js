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
      btnSelected: commonConstants.DIRECTORY_STRUCTURE,



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
      this.props.getTeamCodeMetrics(this.props.currentTeamKey);
      this.props.getTenFileCodeMetrics(this.props.currentTeamKey);
    } else if (selected == commonConstants.DIRECTORY_METRICS) {
      this.props.getFileCodeMetrics(this.props.currentTeamKey);
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
      this.props.getFileCodeMetrics(this.props.currentTeamKey);
      this.props.getTenFileCodeMetrics(this.props.currentTeamKey);

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
                this.props.requestTeamGithubCommits
              }
            >
              {this.state.hasConfig &&
                this.props.teamCodeMetrics &&
                this.props.teamCodeMetrics.length != 0 &&
                this.state.btnSelected == commonConstants.DIRECTORY_STRUCTURE && (

                  <div>
                    <Container >
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Countline JavaScript Files - Frontend</b></h2>
                      <br/>
                      <PolarArea data={this.props.fileTenCodeMetrics[0]}/>
                      <br/>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Top 10 Countline Python Files - Backend</b></h2>
                      <br/>
                      <PolarArea data={this.props.fileTenCodeMetrics[1]}/>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Classes, Files & Functions Comparison</b></h2>
                      <NegativeBar data={this.props.teamCodeMetrics}/>
                      <br/>
                      <h2 style={{fontSize: "21px"}}><b>Frontend and Backend Repository Comparison</b></h2>
                      <ReverseTable data={this.props.teamCodeMetrics}/>
                    </Container>
                    <br/>
                  </div>

                )
              }
              {this.state.hasConfig &&
                this.state.btnSelected == commonConstants.DIRECTORY_METRICS && (

                  <div>
                    <Container>

                      <Row><p>{this.props.fileCodeMetrics}</p></Row>
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
