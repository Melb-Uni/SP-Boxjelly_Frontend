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
  Collapse,
  Input,
  Button,
  Tree,
  Tabs
} from 'antd';
import { github, jira } from "./temp";
import {
  H1,
  ControlBar,
  GitHubContent,
  JiraContent,
  ConfluenceContent,
  Comment,
  MembersWrap, MyTAb
} from './style';

const { Search } = Input;
const { TabPane } = Tabs;

class ProjectHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersShow: true,
      mainShow: true,
      show: "",
      currentDesc:"",
      gitColumns: [
        {
          title: "Repository",
          dataIndex: "Repository",
          key: "Repository",
        },
        {
          title: "Commits",
          dataIndex: "commits",
          key: "commits",
        },
        {
          title: "Author Name",
          dataIndex: "authorname",
          key: "authorname",
          align: "center"
        },
        {
          title: "Branch Name",
          dataIndex: "branchName",
          key: "brachname",
          align: "center"
        },
        {
          title: "Time",
          dataIndex: "time",
          key: "time",
          align: "center",
        },
        {
          title: "URL",
          dataIndex: "code",
          key: "code",
          align: "center",
          render: (text) => (
            <Space size="middle">
              <a href="https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues"
                style={{ textDecoration: "none", display: "inline-block" }}
                className="link"
              >
                <img src="/icons/content.png" alt="content" />
                {text}
              </a>
            </Space>
          )
        }
      ],
      jiraColumns: [
        {
          title: "Activity Name",
          dataIndex: "activity",
          key: "activity",
          ellipsis: true,
          // width: 500,
          align: "center"
        },
        {
          title: "Date Time",
          dataIndex: "datetime",
          key: "datetime",
          // width: 300,
          align: "center"
        },
        {
          title: "What Did They Do",
          dataIndex: "dowhat",
          key: "dowhat",
          // width: 300,
          align: "center"
        },
        {
          title: "URL",
          dataIndex: "url",
          key: "url",
          // width: 300,
          ellipsis: true,
          align: "center",
          render: (text) => (
            <Space size="middle">
              <a href="https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues" style={{ textDecoration: "none", display: "inline-block" }}>
                {text}
              </a>
            </Space>
          )
        },
      ],
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name",
        },

        {
          title: "Profile",
          dataIndex: "picture",
          key: "picture",
          render: (url) => <img alt="Avatar" width="40" src={url}></img>,
        },

        {
          title: "Student ID",
          dataIndex: "id",
          key: "id",
        },

        {
          title: "Email Address",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "GitHub Username",
          dataIndex: "name",
          key: "gitHubUsername",
          render: (item, record, index) => {
            // console.log(item, record, index);
            return !record.editGithubName ?(
                <Space>
                  <span>{record.name || "--"}</span>
                  <Button size={"small"} onClick={()=>this.editAlias(record, index, "editGithubName")}>editor</Button>
                </Space>
            ):(
                <Space>
                  <Input onChange={(e) => this.setCurrentDesc(e.target.value)} defaultValue={record.name}/>
                  <Button size={"small"} onClick={()=>this.saveAlias(record, 0)}>save</Button>
                  <Button size={"small"} onClick={()=>this.cancelEdit(record, index, "editGithubName")}>cancel</Button>
                </Space>
            )
          },
        },
        {
          title: "Jira Username",
          dataIndex: "name",
          key: "jiraUsername",
          render: (item, record, index) => {
            // console.log(item, record, index);
            return !record.editJiraUsername ?(
                <Space>
                  <span>{record.name || "--"}</span>
                  <Button size={"small"} onClick={()=>this.editAlias(record, index, "editJiraUsername")}>editor</Button>
                </Space>
            ):(
                <Space>
                  <Input onChange={(e) => this.setCurrentDesc(e.target.value)} defaultValue={record.name}/>
                  <Button size={"small"} onClick={()=>this.saveAlias(record, 0)}>save</Button>
                  <Button size={"small"} onClick={()=>this.cancelEdit(record, index, "editJiraUsername")}>cancel</Button>
                </Space>
            )
          },
        },
      ],
      teamMemberListNew:{}
    }
  }
  setCurrentDesc = (value)=>{
    this.setState({
      currentDesc:value
    })
  }
  editAlias = (record, index, key)=>{
    // console.log(key,index)
    this.props.teamMemberList[index][key] = true
    // console.log(this.state)
    this.setState({
      ...this.state,
      show:'show'
    })
  }
  cancelEdit = async (record, index, key) => {
    this.props.teamMemberList[index][key] = false
    this.setState({
      show:''
    })
  };
  saveAlias = async (record, type) => {
    console.log(this.state.currentDesc)
  }
  handleSelect = (e) => {
    this.setState({ show: e.target.value }, () => {
      if (this.state.show !== "") {
        this.setState({
          membersShow: false
        })
      }
    })
  }
  componentDidMount() {
    // console.log(this.props.currentTeamKey)
    // console.log(this.props)

    this.props.getTeamMemberList(this.props.currentTeamKey);
    this.props.teamMemberList && this.props.teamMemberList.forEach((item)=>{
      item.editGithubName = false
      item.editJiraUsername = false
    })
  }


  callback = (key) => {
    console.log(key);
  }

  render() {
    const { Panel } = Collapse;
    const Span = ({ children }) => (
      <span title={`${children} author`}><img src="/icons/page.png" alt="page" />
        &nbsp;&nbsp;&nbsp;
        <a href="https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues"
          style={{ textDecoration: "none", color: "rgb(12,48,74)" }}
          onClick={(e) => { e.stopPropagation() }}>
          {children}</a></span>
    )

    const P = ({ children }) => (
      <p title={`${children} author`}>
        <a href="https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues"
          style={{ textDecoration: "none", color: "rgb(12,48,74)" }}>
          <img src="/icons/page.png" alt="page" /> &nbsp;&nbsp;&nbsp;{children}</a>
      </p>
    )

    const Demo = () => (
        <Tabs defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="To Do" key="1">
            To Do
          </TabPane>
          <TabPane tab="In Progress" key="2">
            In Progress
          </TabPane>
          <TabPane tab="Done" key="3">
            Done
          </TabPane>
        </Tabs>
    );

    return (
      <div className="uomcontent">
        {uomHeader("Project Overview")}
        <div role="main">
          <H1>Project 1</H1>
          <div className="page-inner">
            {this.state.mainShow
              ? <>
                <ControlBar>
                  <button onClick={() => { this.setState((prevState) => ({ membersShow: !prevState.membersShow })) }}>Members</button>
                  <select
                    name="content"
                    style={{ width: "30%" }}
                    onChange={this.handleSelect}
                    defaultValue={this.state.show}>
                    <option value="">- - Please select - -</option>
                    <option value="github">GitHub</option>
                    <option value="jira">Jira</option>
                    <option value="confluence">Confluence</option>
                  </select>
                  <button onClick={() => { this.setState({ mainShow: false }) }}>Comment</button>
                </ControlBar>
                {this.state.membersShow
                  ? <MembersWrap>
                    <Table
                      columns={this.state.columns}
                      dataSource={this.props.teamMemberList}
                      pagination={false}
                      // width={600}
                    ></Table>
                  </MembersWrap>
                  : null
                }
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
                        return <div>
                          <MyTAb>
                            <Demo/>
                          </MyTAb>
                          <JiraContent>
                            <Table
                                dataSource={jira}
                                columns={this.state.jiraColumns}
                                pagination={false}
                            ></Table>
                          </JiraContent>
                        </div>
                      case "confluence":
                        return <ConfluenceContent>
                          <Collapse ghost>
                            <Panel header={<Span>SP-Boxjelly Team</Span>} >
                              <Collapse ghost>
                                <Panel header={<Span>2.Design Concept</Span>}>
                                  <P>2.1 Goal</P>
                                  <P>2.2 Business Case</P>
                                  <P>2.3 Non-Functional Requirement</P>
                                  <P>2.4 User Stories</P>
                                  <P>2.5 Use-Case Model</P>
                                  <P>2.6 Use-Case Specification</P>
                                </Panel>
                                <Panel header={<Span>3.Architecture</Span>}>
                                  <P>Architecture document</P>
                                </Panel>
                                <Panel header={<Span>4.Product Backlog</Span>}>
                                  <P>4.1. Sprint 1 - Backlog</P>
                                  <P>4.2. Sprint 2 - Backlog</P>
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
                <button onClick={() => { this.setState({ mainShow: true }) }}>Back</button>
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
  return {
    teamMemberList: state.user.teamMemberList,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName
  };
}
const actionCreators = {
  getTeamMemberList: userActions.getTeamMemberList,
};

const ProjectHome = connect(mapState, actionCreators)(ProjectHomePage);
export { ProjectHome as ProjectHomePage };
