import React, { Component } from "react";
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
  Tabs,
  message,
  Popover
} from 'antd';
import { jira } from "./temp";
import {
  H1,
  ControlBar,
  GitHubContent,
  JiraContent,
  ConfluenceContent,
  Comment,
  MembersWrap, MyTAb
} from './style';

const { TabPane } = Tabs;

class ProjectHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      membersShow: true,
      mainShow: true,
      show: "",
      currentDesc:"",
      githubDetailCommits:[],
      backendList:[],
      frontendList:[],
      gitColumns: [
        {
          title: "Repository",
          dataIndex: "source",
          key: "source",
        },
        {
          title: "Commits",
          dataIndex: "message",
          key: "message",
        },
        {
          title: "Author Name",
          dataIndex: "author",
          key: "author",
          align: "center"
        },
        {
          title: "Branch Name",
          dataIndex: "branchName",
          key: "branchName",
          align: "center"
        },
        {
          title: "Time",
          dataIndex: "date",
          key: "date",
          align: "center",
        },
        {
          title: "URL",
          dataIndex: "url",
          key: "url",
          align: "center",
          render: (text) => (
            <div style={{ textDecoration: "none", display: "inline-block" }}>

              {/*<span>*/}
              {/*  <a href="https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues"*/}
              {/*      style={{ textDecoration: "none", display: "inline-block" }}*/}
              {/*       className="link"*/}
              {/*  >*/}
              {/*  <img src="/icons/content.png" alt="content" />*/}
              {/*                  /!*{text}*!/*/}
              {/*  </a>*/}
              {/*</span>*/}
              <span ><img src="/icons/content.png" onClick={()=>window.open("https://github.com/patanamon/COMP90082-SM1-2021-SP-Frontend/issues")} alt="content" /></span>
              <Button style={{ backgroundColor:'#1a427f',color:'white'}} size={"small"} onClick={()=>window.open(text)} >view</Button>
            </div>
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
          render: (item, record) => <img alt="Avatar" width="40" src={record.picture}></img>,
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
          dataIndex: "gitHubUsername",
          key: "gitHubUsername",
          render: (item, record, index) => {
            return (
                <div key={record.id}>
                  <Space>
                    <span>{record.gitHubUsername || "--"}</span>
                    <Popover title="Editor" trigger="click" content={
                      <Space>
                        <Input onChange={(e) => this.setCurrentDesc(e.target.value)} defaultValue={record.gitHubUsername}/>
                        <Button size={"small"} onClick={()=>this.saveAlias(record, index,"gitHubUsername")}>save</Button>
                        <Button size={"small"} onClick={()=>this.cancelEdit(record, index, "editGithubName")}>cancel</Button>
                      </Space>
                    }>
                      <Button style={{ backgroundColor:'#1a427f',color:'white'}} size={"small"} onClick={()=>this.editAlias(record, index, "editGithubName")}>editor</Button>
                    </Popover>
                  </Space>
                </div>
            )
          },
        },
        {
          title: "Jira Username",
          dataIndex: "jiraUsername",
          key: "jiraUsername",
          render: (item, record, index) => {
            return (
                <div key={record.id}>
                  <Space>
                    <span>{record.jiraUsername || "--"}</span>
                    <Popover title="Editor" trigger="click" content={
                      <Space>
                        <Input onChange={(e) => this.setCurrentDesc(e.target.value)} defaultValue={record.jiraUsername}/>
                        <Button size={"small"} onClick={()=>this.saveAlias(record, index,"jiraUsername")}>save</Button>
                        <Button size={"small"} onClick={()=>this.cancelEdit(record, index, "editJiraUsername")}>cancel</Button>
                      </Space>
                    }>
                      <Button style={{ backgroundColor:'#1a427f',color:'white'}} size={"small"} onClick={()=>this.editAlias(record, index, "editJiraUsername")}>editor</Button>
                    </Popover>
                  </Space>
                </div>
            )
          },
        },
      ],
    }
  }
  setCurrentDesc = (value)=>{
    this.setState({
      currentDesc:value
    })
  }
  editAlias = (record, index, key)=>{
    // console.log(key,index)
    this.props.teamMemberList[index][key] = "yang"
    // console.log(this.state)
    this.setState({
      ...this.state,
      show:'show',
    })
  }
  cancelEdit = async (record, index, key) => {
    this.props.teamMemberList[index][key] = false
    this.setState({
      ...this.state,
      show:''
    })
  };
  saveAlias = async (record,index, type) => {
    if(type === "gitHubUsername"){
      await this.props.updateGitUsername({
        user_id:record.id,
        git_username: this.state.currentDesc || record.gitHubUsername
      })

      this.timerEditorGithubName = setTimeout(()=>{
        if(this.props.updateGitUserName && this.props.updateGitUserName.code === 0){
          message.success("editor success")
          this.setState({
            ...this.state,
            show:''
          })
        }else {
          message.error("editor error")
        }
      },100)

      this.props.teamMemberList[index][type] = this.state.currentDesc

    }else {
      await this.props.updateJiraUsername({
        user_id:record.id,
        jira_username: this.state.currentDesc || record.jiraUsername
      })
      this.timerEditorJiraName = setTimeout(()=>{
        if(this.props.updateJiraUserName.code === 0){
          message.success("editor success")
          this.setState({
            ...this.state,
            show:''
          })
        }else {
          message.error("editor error")
        }
      },100)
      this.props.teamMemberList[index]["jiraUsername"] = this.state.currentDesc
    }

    this.props.updateCommits({
      space_key:this.props.currentTeamKey
    })
  }

  handleSelect = (e) => {
    console.log("this.props.teamGithubDetailCommits")
    console.log(this.props.teamGithubDetailCommits)
    this.setState({ show: e.target.value }, () => {
      if (this.state.show !== "") {
        this.setState({
          membersShow: false
        })
      }
    })
  }
  componentDidMount() {

    if(!this.props.teamMemberList){
      this.props.getTeamMemberList(this.props.currentTeamKey)
    }

    this.props.getTeamGithubDetailCommits(this.props.currentTeamKey);

    this.timer = setTimeout(()=>{
      if(this.props.teamGithubDetailCommits){
        const backendTemp = this.props.teamGithubDetailCommits.filter((item)=>item.source === 'backend')
        const frontendTemp = this.props.teamGithubDetailCommits.filter((item)=>item.source === 'frontend')
        this.setState({
          ...this.state,
          githubDetailCommits:this.props.teamGithubDetailCommits,
          backendList:backendTemp,
          frontendList:frontendTemp,
        })
      }
    },100)

  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
    this.timerEditorGithubName && clearTimeout(this.timerEditorGithubName);
    this.timerEditorJiraName && clearTimeout(this.timerEditorJiraName);
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
          <H1>{this.props.currentTeamKey}</H1>
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
                      rowKey={record=>record.id}
                    ></Table>
                  </MembersWrap>
                  : null
                }
                {
                  (() => {
                    switch (this.state.show) {
                      case "github":
                        return <GitHubContent>
                          <Tabs centered defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab="Backend" key="1">
                              <Table
                                  dataSource={this.state.backendList}
                                  columns={this.state.gitColumns}
                                  pagination={false}
                                  rowKey={record=>record.url}
                              ></Table>
                            </TabPane>
                            <TabPane tab="Frontend" key="2">
                              <Table
                                  dataSource={this.state.frontendList}
                                  columns={this.state.gitColumns}
                                  pagination={false}
                                  rowKey={record=>record.url}
                              ></Table>
                            </TabPane>
                          </Tabs>

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
                                rowKey={record=>Math.random()}
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
    currentTeamName: state.user.currentTeamName,
    teamGithubDetailCommits: state.user.teamGithubDetailCommits,
    updateGitUserName: state.user.updateGitUserName,
    updateJiraUserName: state.user.updateJiraUserName,
  };
}
const actionCreators = {
  getTeamMemberList: userActions.getTeamMemberList,
  getTeamGithubDetailCommits:userActions.getTeamGithubTableCommits,
  updateGitUsername:userActions.updateGitUsername,
  updateJiraUsername:userActions.updateJiraUsername,
  updateCommits:userActions.updateCommits,
};

const ProjectHome = connect(mapState, actionCreators)(ProjectHomePage);
export { ProjectHome as ProjectHomePage };
