import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import uomHeader from "../header/uomheader.js";
import { userActions } from "../_actions";
// import Table from "../_utils/Table";
// import Banner from "../_utils/Banner";
// import { Warining, InformationalNote } from "../_utils/Alert";
// import { alertConstants } from "../_constants";
import {
  Table,
  Space,
  Collapse
} from 'antd';
import { github, jira } from "./temp";
import {
  H1,
  ControlBar,
  GitHubContent,
  JiraContent,
  ConfluenceContent,
  Comment
} from './style';

class ProjectHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: "github",
      page: "main",
      gitColumns: [
        {
          title: "Title",
          dataIndex: "title",
          key: "title",
        },
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
          align: "center"
        },
        {
          title: "Time",
          dataIndex: "time",
          key: "time",
          align: "center",
        },
        {
          title: "",
          dataIndex: "code",
          key: "code",
          render: (text, record) => (
            <Space size="middle">
              <a href="https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues" style={{ textDecoration: "none", display: "inline-block" }}>
                <img src="/icons/content.png" alt="content" />
                {record.code}
              </a>
            </Space>
          )
        }
      ],
      jiraColumns: [
        {
          title: "Comments",
          dataIndex: "comments",
          key: "comments",
          ellipsis: true,
          width: 500
        },
        {
          title: "Work Log",
          dataIndex: "worklog",
          key: "worklog",
          width: 200
        },
        {
          title: "History",
          dataIndex: "history",
          key: "history",
          width: 200
        },
        {
          title: "Activity",
          dataIndex: "activity",
          key: "activity",
          width: 300
        },
      ]
    }
  }
  render() {
    const { Panel } = Collapse;
    const P = ({ children }) => (
      <span><img src="/icons/page.png" alt="page" /> &nbsp;&nbsp;&nbsp;{children}</span>
    )
    return (
      <div className="uomcontent">
        {uomHeader("Project Overview")}
        <div role="main">
          <H1>Project 1</H1>
          <div className="page-inner">
            {this.state.page === "main"
              ? <>
                <ControlBar>
                  <button>Members</button>
                  <select name="content" style={{ width: "30%" }} onChange={(e) => { this.setState({ show: e.target.value }) }}>
                    <option value="github">GitHub</option>
                    <option value="jira">Jira</option>
                    <option value="confluence">Confluence</option>
                  </select>
                  <button onClick={() => { this.setState({ page: "comment" }) }}>Comment</button>
                </ControlBar>
                {
                  (() => {
                    switch (this.state.show) {
                      case "github":
                        return <GitHubContent>
                          <Table
                            dataSource={github}
                            columns={this.state.gitColumns}
                            pagination={false}
                          ></Table>
                        </GitHubContent>
                      case "jira":
                        return <JiraContent>
                          <Table
                            dataSource={jira}
                            columns={this.state.jiraColumns}
                            pagination={false}
                          ></Table>
                        </JiraContent>
                      case "confluence":
                        return <ConfluenceContent>
                          <Collapse ghost>
                            <Panel header={<P>SP-Boxjelly Team</P>} >
                              <Collapse ghost>
                                <Panel header={<P>2.Design Concept</P>}>
                                  <Collapse ghost>
                                    <Panel header={<P>2.1 Goal</P>} />
                                    <Panel header={<P>2.2 Business Case</P>}></Panel>
                                    <Panel header={<P>2.3 Non-Functional Requirement</P>}></Panel>
                                    <Panel header={<P>2.4 User Stories</P>}></Panel>
                                    <Panel header={<P>2.5 Use-Case Model</P>}></Panel>
                                    <Panel header={<P>2.6 Use-Case Specification</P>}></Panel>
                                  </Collapse>
                                </Panel>
                                <Panel header={<P>3.Architecture</P>}>
                                  <Collapse ghost>
                                    <Panel header={<P>Architecture document</P>}></Panel>
                                  </Collapse>
                                </Panel>
                                <Panel header={<P>4.Product Backlog</P>}>
                                  <Collapse ghost>
                                    <Panel header={<P>4.1. Sprint 1 - Backlog</P>}></Panel>
                                    <Panel header={<P>4.2. Sprint 2 - Backlog</P>}></Panel>
                                  </Collapse>
                                </Panel>
                              </Collapse>
                            </Panel>
                          </Collapse>
                        </ConfluenceContent>
                      default:
                        return null;
                    }
                  })()
                }
              </>
              : <Comment>
                <div>Write your comments to Project 1:</div>
                <textarea name="comment" cols="124" rows="15" style={{ display: "block" }}></textarea>
                <button>Submit</button>
              </Comment>
            }
          </div>
        </div>
      </div >
    );
  }
}

function mapState(state) {
  console.log(state.user);
  return {
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName
  };
}
const actionCreators = {
  getTeamMemberList: userActions.getTeamMemberList,
};

const ProjectHome = connect(mapState, actionCreators)(ProjectHomePage);
export { ProjectHome as ProjectHomePage };
