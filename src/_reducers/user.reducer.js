import { userConstants } from "../_constants";

const initState = {
  requestIndividualConfluencePages: false,
  requestIndividualGitHubCommits: false,
  requestIndividualJiraCounts: false,
  requestTeamConfluencePages: false,
  requestTeamGithubCommits: false,
  requestTeamJiraTickets: false,
  requestSetTeamInfo: false,
  requestTeamCodeMetrics: false,
  requestConfluenceSpaceByKeyWord: false,
  importProject: false,
  requestImportedProject: false,
  currentTeamKey: "",
  currentTeamName: "",
  isLogin: false,
  requestLogin: false,
  teamInfo: {},


  requestTeamGithubDetailCommits: false,
  requestTeamGithubDetailChanges: false,
  requestFileCodeMetricsCommits: false,
  requestTenFileCodeMetricsCommits: false,

  requestTaskComparison: false,
  requestUserComparison: false,

  requestLastCommit: false,
  
  requestTeamConfluenceUpdate: false,
};

export function user(state = initState, action) {
  switch (action.type) {
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_REQUEST:
      return {
        ...state,
        requestIndividualConfluencePages: true,
      };

    case userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_SUCCESS:
      return {
        ...state,
        requestIndividualConfluencePages: false,
        individualConfluencePages: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_FAILURE:
      return {
        ...state,
        requestIndividualConfluencePages: false,
        individualConfluencePages: {},
      };
    case userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_REQUEST:
      return {
        ...state,
        requestIndividualGitHubCommits: true,
      };

    case userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_SUCCESS:
      return {
        ...state,
        requestIndividualGitHubCommits: false,
        individualGitHubCommits: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_FAILURE:
      return {
        ...state,
        requestIndividualGitHubCommits: false,
        individualGitHubCommits: {},
      };
    case userConstants.GET_INDIVIDUAL_JIRA_COUNTS_REQUEST:
      return {
        ...state,
        requestIndividualJiraCounts: true,
      };

    case userConstants.GET_INDIVIDUAL_JIRA_COUNTS_SUCCESS:
      return {
        ...state,
        requestIndividualJiraCounts: false,
        individualJiraCounts: action.payload,
      };
    case userConstants.GET_INDIVIDUAL_JIRA_COUNTS_FAILURE:
      return {
        ...state,
        requestIndividualJiraCounts: false,
        individualJiraCounts: {},
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_REQUEST:
      return {
        ...state,
        requestTeamConfluencePages: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_SUCCESS:
      return {
        ...state,
        requestTeamConfluencePages: false,
        teamConfluencePages: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_PAGES_FAILURE:
      return {
        ...state,
        requestTeamConfluencePages: false,
        teamConfluencePages: {},
      };


    case userConstants.GET_TEAM_GITHUB_COMMITS_REQUEST:
      return {
        ...state,
        requestTeamGithubCommits: true,
      };
    case userConstants.GET_TEAM_GITHUB_COMMITS_SUCCESS:
      return {
        ...state,
        requestTeamGithubCommits: false,
        teamGithubCommits: action.payload,
      };
    case userConstants.GET_TEAM_GITHUB_COMMITS_FAILURE:
      return {
        ...state,
        requestTeamGithubCommits: false,
        teamGithubCommits: {},
      };

    case userConstants.UPDATE_GIT_USER_NAME_REQUEST:
      return {
        ...state,
        requestUpdateGitUserName: true,
      };
    case userConstants.UPDATE_GIT_USER_NAME_SUCCESS:
      return {
        ...state,
        requestUpdateGitUserName: false,
        updateGitUserName: action.payload,
      };
    case userConstants.UPDATE_GIT_USER_NAME_FAILURE:
      return {
        ...state,
        requestUpdateGitUserName: false,
        updateGitUserName: {},
      };

    case userConstants.UPDATE_Jira_USER_NAME_REQUEST:
      return {
        ...state,
        requestUpdateJiraUserName: true,
      };
    case userConstants.UPDATE_Jira_USER_NAME_SUCCESS:
      return {
        ...state,
        requestUpdateJiraUserName: false,
        updateJiraUserName: action.payload,
      };
    case userConstants.UPDATE_Jira_USER_NAME_FAILURE:
      return {
        ...state,
        requestUpdateJiraUserName: false,
        updateJiraUserName: {},
      };

    case userConstants.UPDATE_COMMITS_REQUEST:
      return {
        ...state,
        requestUpdateCommits: true,
      };
    case userConstants.UPDATE_COMMITS_SUCCESS:
      return {
        ...state,
        requestUpdateCommits: false,
        updateCommits: action.payload,
      };
    case userConstants.UPDATE_COMMITS_FAILURE:
      return {
        ...state,
        requestUpdateCommits: false,
        updateCommits: {},
      };


      case userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_REQUEST:
        return {
          ...state,
          requestTeamGithubDetailCommits: true,
        };
      case userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_SUCCESS:
        return {
          ...state,
          requestTeamGithubDetailCommits: false,
          teamGithubDetailCommits: action.payload,
        };
      case userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_FAILURE:
        return {
          ...state,
          requestTeamGithubDetailCommits: false,
          teamGithubDetailCommits: {},
        };



      case userConstants.GET_TEAM_GITHUB_DETAIL_CHANGES_REQUEST:
        return {
          ...state,
          requestTeamGithubDetailChanges: true,
        };
      case userConstants.GET_TEAM_GITHUB_DETAIL_CHANGES_SUCCESS:
        return {
          ...state,
          requestTeamGithubDetailChanges: false,
          teamGithubDetailChanges: action.payload,
        };
      case userConstants.GET_TEAM_GITHUB_DETAIL_CHANGES_FAILURE:
        return {
          ...state,
          requestTeamGithubDetailChanges: false,
          teamGithubDetailChanges: {},
        };




    case userConstants.GET_FILE_CODE_METRICS_REQUEST:
      return {
        ...state,
        requestFileCodeMetricsCommits: true,
      };
    case userConstants.GET_FILE_CODE_METRICS_SUCCESS:
      return {
        ...state,
        requestFileCodeMetricsCommits: false,
        teamFileCodeMetrics: action.payload,
      };
    case userConstants.GET_FILE_CODE_METRICS_FAILURE:
      return {
        ...state,
        requestFileCodeMetricsCommits: false,
        teamFileCodeMetrics: {},
      };

    case userConstants.GET_TEN_FILE_CODE_METRICS_REQUEST:
      return {
        ...state,
        requestTenFileCodeMetricsCommits: true,
      };
    case userConstants.GET_TEN_FILE_CODE_METRICS_SUCCESS:
      return {
        ...state,
        requestTenFileCodeMetricsCommits: false,
        teamTenFileCodeMetrics: action.payload,
      };
    case userConstants.GET_TEN_FILE_CODE_METRICS_FAILURE:
      return {
        ...state,
        requestTenFileCodeMetricsCommits: false,
        teamTenFileCodeMetrics: {},
      };

    case userConstants.GET_ALL_INDIVIDUAL_CONTRIBUTION_REQUEST:
      return {
        ...state,
        taskComparison: true,
      };
    case userConstants.GET_ALL_INDIVIDUAL_CONTRIBUTION_SUCCESS:
      return {
        ...state,
        requestTaskComparison: false,
        taskComparison: action.payload,
      };
    case userConstants.GET_ALL_INDIVIDUAL_CONTRIBUTION_FAILURE:
      return {
        ...state,
        requestTaskComparison: false,
        taskComparison: {},
      };

    case userConstants.GET_USER_INDIVIDUAL_CONTRIBUTION_REQUEST:
      return {
        ...state,
        userComparison: true,
      };
    case userConstants.GET_USER_INDIVIDUAL_CONTRIBUTION_SUCCESS:
      return {
        ...state,
        requestUserComparison: false,
        userComparison: action.payload,
      };
    case userConstants.GET_USER_INDIVIDUAL_CONTRIBUTION_FAILURE:
      return {
        ...state,
        requestUserComparison: false,
        userComparison: {},
      };

    case userConstants.GET_LAST_COMMIT_REQUEST:
      return {
        ...state,
        lastCommit: true,
      };
    case userConstants.GET_LAST_COMMIT_SUCCESS:
      return {
        ...state,
        requestLastCommit: false,
        lastCommit: action.payload,
      };
    case userConstants.GET_LAST_COMMIT_FAILURE:
      return {
        ...state,
        requestLastCommit: false,
        lastCommit: {},
      };



      case userConstants.GET_TEAM_CONFLUENCE_UPDATE_REQUEST:
        return {
          ...state,
          requestTeamConfluenceUpdate: true,
        };
      case userConstants.GET_TEAM_CONFLUENCE_UPDATE_SUCCESS:
        return {
          ...state,
          requestTeamConfluenceUpdate: false,
          teamConfluenceUpdate: action.payload,
        };
      case userConstants.GET_TEAM_CONFLUENCE_UPDATE_FAILURE:
        return {
          ...state,
          requestTeamConfluenceUpdate: false,
          teamConfluenceUpdate: {},
        };
  
      case userConstants.GET_INDIVIDUAL_CONFLUENCE_UPDATE_REQUEST:
        return {
          ...state,
          latestCommit: true,
        };
      case userConstants.GET_INDIVIDUAL_CONFLUENCE_UPDATE_SUCCESS:
        return {
          ...state,
          requestLatestCommit: false,
          latestCommit: action.payload,
        };
      case userConstants.GET_INDIVIDUAL_CONFLUENCE_UPDATE_FAILURE:
        return {
          ...state,
          requestLatestCommit: false,
          latestCommit: {},
        };





    case userConstants.GET_TEAM_JIRA_TICKETS_REQUEST:
      return {
        ...state,
        requestTeamJiraTickets: true,
      };
    case userConstants.GET_TEAM_JIRA_TICKETS_SUCCESS:
      return {
        ...state,
        requestTeamJiraTickets: false,
        teamJiraTickets: action.payload,
      };
    case userConstants.GET_TEAM_JIRA_TICKETS_FAILURE:
      return {
        ...state,
        requestTeamJiraTickets: false,
        teamJiraTickets: {},
      };
    case userConstants.GET_TEAM_CONFLUENCE_MEETINGS_REQUEST:
      return {
        ...state,
        requestTeamConfluenceMeetins: true,
      };
    case userConstants.GET_TEAM_CONFLUENCE_MEETINGS_SUCCESS:
      return {
        ...state,
        requestTeamConfluenceMeetins: false,
        teamConfluenceMeeting: action.payload,
      };
    case userConstants.GET_TEAM_CONFLUENCE_MEETINGS_FAILURE:
      return {
        ...state,
        requestTeamConfluenceMeetins: false,
      };
    case userConstants.GET_TEAM_CODE_METRICS_REQUEST:
      return {
        ...state,
        requestTeamCodeMetrics: true,
      };
    case userConstants.GET_TEAM_CODE_METRICS_SUCCESS:
      return {
        ...state,
        teamCodeMetrics: action.payload,
        requestTeamCodeMetrics: false,
      };
    case userConstants.GET_TEAM_CODE_METRICS_FAILURE:
      return {
        ...state,
        requestTeamCodeMetrics: false,
      };
    case userConstants.SETTEAMINFO_REQUEST:
      return {
        ...state,
        requestSetTeamInfo: true,
      };
    case userConstants.SETTEAMINFO_SUCCESS:
      return {
        ...state,
        requestSetTeamInfo: false,
        teamInfo: Object.assign(state.teamInfo, action.payload),
        setTeamInfoSuccess: true,
      };
    case userConstants.SETTEAMINFO_FAILURE:
      return {
        ...state,
        requestSetTeamInfo: false,
        setTeamInfoSuccess: false,
      };
    case userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_REQUEST:
      return {
        ...state,
        requestConfluenceSpaceByKeyWord: true,
      };
    case userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_SUCCESS:
      return {
        ...state,
        confluenceSpaceSearchResult: action.payload,
        requestConfluenceSpaceByKeyWord: false,
      };
    case userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_FAILURE:
      return {
        ...state,
        requestConfluenceSpaceByKeyWord: false,
      };
    case userConstants.GET_TEAM_MEMBER_LIST_REQUEST:
      return {
        ...state,
        requestTeamMemberList: true,
      };
    case userConstants.GET_TEAM_MEMBER_LIST_SUCCESS:
      return {
        ...state,
        requestTeamMemberList: false,
        teamMemberList: action.payload,
        getTeamMemberListSuccess: true,
      };
    case userConstants.GET_TEAM_MEMBER_LIST_FAILURE:
      return {
        ...state,
        requestTeamMemberList: false,
        getTeamMemberListSuccess: false,
      };
    case userConstants.IMPORT_PROJECT_REQUEST:
      return {
        ...state,
        importProject: true,
      };
    case userConstants.IMPORT_PROJECT_SUCCESS:
      return {
        ...state,
        importProject: false,
        importProjectSuccess: true,
      };
    case userConstants.IMPORT_PROJECT_FAILURE:
      return {
        ...state,
        importProject: false,
        importProjectSuccess: false,
      };
    case userConstants.GET_IMPORTED_PROJECT_REQUEST:
      return {
        ...state,
        requestImportedProject: true,
      };
    case userConstants.GET_IMPORTED_PROJECT_SUCCESS:
      return {
        ...state,
        importedProject: action.payload,
        requestImportedProject: false,
      };
    case userConstants.GET_IMPORTED_PROJECT_FAILURE:
      return {
        ...state,
        requestImportedProject: false,
      };
    case userConstants.DELETE_IMPORTED_PROJECT_REQUEST:
      return {
        ...state,
        deleteImportedProject: true,
      };
    case userConstants.DELETE_IMPORTED_PROJECT_SUCCESS:
      return {
        ...state,
        deleteImportedProject: false,
        deleteProjectSuccess: true,
      };
    case userConstants.DELETE_IMPORTED_PROJECT_FAILUER:
      return {
        ...state,
        deleteImportedProject: false,
        deleteProjectSuccess: false,
      };
    case userConstants.SET_CURRENT_TEAM_NAME:
      return {
        ...state,
        currentTeamName: action.payload,
      };
    case userConstants.SET_CURRENT_TEAM_KEY:
      return {
        ...state,
        currentTeamKey: action.payload,
      };
    case userConstants.LOGIN_REQUEST:
      return {
        ...state,
        requestLogin: true,
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        ...state,
        requestLogin: false,
        isLogin: true,
        isLogout: false,
      };
    case userConstants.LOGIN_FAILURE:
      return {
        ...state,
        requestLogin: false,
      };
    case userConstants.LOGOUT_SUCCESS:
      return {
        ...state,
        isLogin: false,
        isLogout: true,
      };
    default:
      return state;
  }
}
