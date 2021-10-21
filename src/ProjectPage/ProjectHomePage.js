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
      treeList:[],
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
          sorter: (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
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
                    <span>{record.git_name || "--"}</span>
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
                    <span>{record.jira_name || "--"}</span>
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

    this.props.getTeamGithubDetailCommits(this.props.currentTeamKey);
    this.props.getTeamMemberList(this.props.currentTeamKey)

  }

  handleSelect = (e) => {
    console.log(e.target.value)
    if(e.target.value === 'github' && this.props.teamGithubDetailCommits){

      // this.setState((prevState, props)=>({
      //   ...this.state,
      //   backendList:this.props.teamGithubDetailCommits.filter((item)=>item.source === 'backend'),
      //   frontendList:this.props.teamGithubDetailCommits.filter((item)=>item.source === 'frontend')
      //
      // }))

      this.setState({
        ...this.state,
        backendList:this.props.teamGithubDetailCommits.filter((item)=>item.source === 'backend'),
        frontendList:this.props.teamGithubDetailCommits.filter((item)=>item.source === 'frontend')
      })
    }

    if(e.target.value === 'confluence' && this.props.newstConfluence){
      const allTreeList = this.props.newstConfluence.data.filter((item)=>item.title.indexOf(".")!=-1)
      const allF = allTreeList.filter((item)=>{
        return item.title.indexOf(". ")!=-1 && item.title.indexOf("-")<=-1
      })

      const data = []
      allF.forEach((item)=>{
        const obj = {...item}
        const fNumber = item.title.split(". ")[0]
        if(fNumber === '0' || fNumber === '1' || fNumber === '8')return
        obj['children'] = []
        allTreeList.forEach((k)=>{
          if(k.title.indexOf("-") && k.title.split("-")[0] === fNumber){
            obj['children'].push(k)
          }
        })
        data.push(obj)
      })
      console.log(data)

      this.setState({
        ...this.state,
        treeList:data,
      })
    }

    this.setState({ show: e.target.value }, () => {
      if (this.state.show !== "") {
        this.setState({
          membersShow: false
        })
      }
    })
  }
  componentDidMount() {

    // if(!this.props.teamMemberList){
    //   this.props.getTeamMemberList(this.props.currentTeamKey)
    // }

    this.props.getTeamMemberList(this.props.currentTeamKey)

    this.props.getTeamGithubDetailCommits(this.props.currentTeamKey);

    this.props.getNewstConfluence(this.props.currentTeamKey);

  }

  componentWillUnmount() {
    this.timerEditorGithubName && clearTimeout(this.timerEditorGithubName);
    this.timerEditorJiraName && clearTimeout(this.timerEditorJiraName);
  }

  render() {
    const { Panel } = Collapse;
    const Span = (props) => (
      <span title={`${props.children} author`}><img src="/icons/page.png" alt="page" />
        &nbsp;&nbsp;&nbsp;
        <a href={props.url}
          style={{ textDecoration: "none", color: "rgb(12,48,74)" }}
          onClick={(e) => { e.stopPropagation() }}>
          {props.children}</a></span>
    )

    const P = (props) => (
      <p title={`${props.children} author`}>
        <a href={props.url}
           onClick={(e) => { e.stopPropagation() }}
          style={{ textDecoration: "none", color: "rgb(12,48,74)" }}>
          <img src="/icons/page.png" alt="page" /> &nbsp;&nbsp;&nbsp;{props.children}</a>
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
                                {
                                  this.state.treeList.map((item)=>(
                                    <Panel header={<Span url={item.url}>{item.title}</Span>} key={item.title}>
                                      {item.children.map((k)=>(
                                        <P url={k.url} key={k.title}>{k.title}</P>
                                      ))}
                                    </Panel>
                                  ))
                                }
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
    newstConfluence: state.user.newstConfluence,
  };
}
const actionCreators = {
  getTeamMemberList: userActions.getTeamMemberList,
  getTeamGithubDetailCommits:userActions.getTeamGithubTableCommits,
  updateGitUsername:userActions.updateGitUsername,
  updateJiraUsername:userActions.updateJiraUsername,
  updateCommits:userActions.updateCommits,
  getNewstConfluence:userActions.getNewstConfluence,
};

const ProjectHome = connect(mapState, actionCreators)(ProjectHomePage);
export { ProjectHome as ProjectHomePage };
