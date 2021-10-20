import { userConstants } from "../_constants";
import { userService } from "../_services";
import { history } from "../_helpers";
import { formatLineChartData } from "../_utils/formatLineChartData.js";
import { formatDonutChartData } from "../_utils/formatDonutChartData.js";
import { unixToDate } from "../_utils/unixToDate.js";
import { failureToast } from "../_utils/toast";
import { successToast } from "../_utils/toast";
import { formatGitHeatmapUpdateData } from "../_utils/formatGitHeatmapUpdateData.js";
import { formatGitHeatmapChangeData } from "../_utils/formatGitHeatmapChangeData.js";
import { formatGitTableData } from "../_utils/formatGitTableData.js";
import { formatFileCodeMetrics } from "../_utils/formatFileCodeMetrics.js";
import { formatTenFileCodeMetrics } from "../_utils/formatTenFileCodeMetrics.js";
import { formatTaskComparisonData } from "../_utils/formatTaskComparisonData";
import { formatUserComparisonData } from "../_utils/formatUserComparisonData";
import {formatCardData} from "../_utils/formatCardData";
import {formatConHeatmapUpdateData} from "../_utils/formatConHeatmapUpdateData";


export const userActions = {
  login,
  logout,
  getTeamConfluencePages,
  getTeamGithubCommits,
  getTeamJiraTickets,
  getTeamConfluenceMeeting,
  getTeamCodeMetrics,
  setTeamInfo,
  getConfluenceIndividualData,
  getGithubIndividualData,
  getJiraIndividualData,
  getConfluenceSpaceByKeyWord,
  importProject,
  getImportedProject,
  deleteImportedProject,
  setCurrentTeamKey,
  setCurrentTeamName,
  getTeamMemberList,

  getTeamGithubDetailCommits,
  getTeamGithubDetailChanges,
  updateGitUsername,
  updateJiraUsername,
  getTeamGithubTableCommits,
  getFileCodeMetrics,
  updateCommits,
  getTenFileCodeMetrics,
  getTaskComparisonIndividualContribution,
  getUserComparisonIndividualContribution,
  getAllLastCommit,
  getTeamConfluenceUpdate,

};

function request(action, payload) {
  return { type: action, payload };
}
function success(action, payload) {
  return { type: action, payload };
}
function failure(action, payload) {
  return { type: action, payload };
}

function unixToDateHelper(jsonData) {
  for (let i = 0, len = jsonData.length; i < len; i++) {
    jsonData[i].time = unixToDate(jsonData[i].time);
  }

  return jsonData;
}

function formatEventTime(eventArray) {
  eventArray.forEach(function(event) {
    const startArray = event.start.split("-")
    const endArray = event.end.split("-")
    event.start = new Date(parseInt(startArray[0]), parseInt(startArray[1])-1, parseInt(startArray[2]), 0 , 0)
    event.end = new Date(parseInt(endArray[0]), parseInt(endArray[1])-1, parseInt(endArray[2]), 23 , 59)
    console.log(typeof(event.start))
  })

  return eventArray;
}

function checkRespCode(response) {
  return response.code == 0;
}

function getTeamConfluencePages(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_CONFLUENCE_PAGES_REQUEST));
    userService.getTeamConfluencePages(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_SUCCESS,
              formatLineChartData(response)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_PAGES_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_PAGES_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getAllLastCommit(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_LAST_COMMIT_REQUEST));
    userService.getAllLastCommit(teamKey).then(
      (response) => {
        dispatch(
          success(
            userConstants.GET_LAST_COMMIT_SUCCESS,
            formatCardData(response),
          )
        );
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_LAST_COMMIT_FAILURE,
            error.toString(),
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTaskComparisonIndividualContribution(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_ALL_INDIVIDUAL_CONTRIBUTION_REQUEST));
    userService.getAllIndividualContribution(teamKey).then(
      (response) => {
        dispatch(
          success(
            userConstants.GET_ALL_INDIVIDUAL_CONTRIBUTION_SUCCESS,
            formatTaskComparisonData(response),
          )
        );
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_ALL_INDIVIDUAL_CONTRIBUTION_FAILURE,
            error.toString(),
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getUserComparisonIndividualContribution(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_USER_INDIVIDUAL_CONTRIBUTION_REQUEST));
    userService.getAllIndividualContribution(teamKey).then(
      (response) => {
        dispatch(
          success(
            userConstants.GET_USER_INDIVIDUAL_CONTRIBUTION_SUCCESS,
            formatUserComparisonData(response),
          )
        );
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_USER_INDIVIDUAL_CONTRIBUTION_FAILURE,
            error.toString(),
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamGithubDetailCommits(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_REQUEST));
    userService.getTeamGithubDetailCommits(teamKey).then(
      (response) => {
        dispatch(
          success(
            userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_SUCCESS,
            formatGitHeatmapUpdateData(response),
          )
        );
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_FAILURE,
            error.toString(),
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamGithubDetailChanges(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_GITHUB_DETAIL_CHANGES_REQUEST));
    userService.getTeamGithubDetailChanges(teamKey).then(
      (response) => {
        dispatch(
          success(
            userConstants.GET_TEAM_GITHUB_DETAIL_CHANGES_SUCCESS,
            formatGitHeatmapChangeData(response),
          )
        );
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_GITHUB_DETAIL_CHANGES_FAILURE,
            error.toString(),
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamGithubTableCommits(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_REQUEST));
    userService.getTeamGithubDetailCommits(teamKey).then(
        (response) => {
          dispatch(
              success(
                  userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_SUCCESS,
                  formatGitTableData(response),
              )
          );
        },
        (error) => {
          dispatch(
              failure(
                  userConstants.GET_TEAM_GITHUB_DETAIL_COMMITS_FAILURE,
                  error.toString(),
                  error.toString()
              )
          );
          failureToast(error.toString());
        }
    );
  };
}

function updateCommits(jsonData) {
  return (dispatch) => {
    dispatch(request(userConstants.UPDATE_COMMITS_REQUEST));
    userService.updateCommits(jsonData).then(
        (response) => {
          dispatch(
              success(
                  userConstants.UPDATE_COMMITS_SUCCESS,
                  response,
              )
          );
        },
        (error) => {
          dispatch(
              failure(
                  userConstants.UPDATE_COMMITS_FAILURE,
                  error.toString(),
                  error.toString()
              )
          );
          failureToast(error.toString());
        }
    );
  };
}

function updateJiraUsername(jsonData) {
  return (dispatch) => {
    dispatch(request(userConstants.UPDATE_Jira_USER_NAME_REQUEST));
    userService.updateJiraUsername(jsonData).then(
        (response) => {
          dispatch(
              success(
                  userConstants.UPDATE_Jira_USER_NAME_SUCCESS,
                  response,
              )
          );
        },
        (error) => {
          dispatch(
              failure(
                  userConstants.UPDATE_Jira_USER_NAME_FAILURE,
                  error.toString(),
                  error.toString()
              )
          );
          failureToast(error.toString());
        }
    )
 };
}

function updateGitUsername(jsonData) {
    return (dispatch) => {
        dispatch(request(userConstants.UPDATE_GIT_USER_NAME_REQUEST));
        userService.updateGitUsername(jsonData).then(
            (response) => {
                dispatch(
                    success(
                        userConstants.UPDATE_GIT_USER_NAME_SUCCESS,
                        response,
                    )
                );
            },
            (error) => {
                dispatch(
                    failure(
                        userConstants.UPDATE_GIT_USER_NAME_FAILURE,
                        error.toString(),
                        error.toString()
                    )
                );
                failureToast(error.toString());
            }
        );
    };
}
  
function getFileCodeMetrics(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_FILE_CODE_METRICS_REQUEST));
    userService.getFileCodeMetrics(teamKey).then(
      (response) => {
          dispatch(
            success(
              userConstants.GET_FILE_CODE_METRICS_SUCCESS,
              formatFileCodeMetrics(response),
            )
          );
        },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_FILE_CODE_METRICS_FAILURE, 
            error.toString()
          )
        );
      }
    );
  };
}

function getTenFileCodeMetrics(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEN_FILE_CODE_METRICS_REQUEST));
    userService.getFileCodeMetrics(teamKey).then(
      (response) => {
          dispatch(
            success(
              userConstants.GET_TEN_FILE_CODE_METRICS_SUCCESS,
              formatTenFileCodeMetrics(response),
            )
          );
        },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEN_FILE_CODE_METRICS_FAILURE, 
            error.toString()
          )
        );
      }
    );
  };
}


function getTeamGithubCommits(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_GITHUB_COMMITS_REQUEST));
    userService.getTeamGithubCommits(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_GITHUB_COMMITS_SUCCESS,
              formatLineChartData(response)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_GITHUB_COMMITS_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_GITHUB_COMMITS_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamJiraTickets(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_TEAM_JIRA_TICKETS_REQUEST));
    userService.getTeamJiraTickets(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_JIRA_TICKETS_SUCCESS,
              formatLineChartData(response)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_JIRA_TICKETS_FAILURE,
              response.message
            )
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_TEAM_JIRA_TICKETS_FAILURE, error.toString())
        );
        failureToast(error.toString());
      }
    );
  };
}

function getTeamConfluenceMeeting(teamKey) {
  return (dispatch) => {
    userService.getTeamConfluenceMeeting(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_MEETINGS_SUCCESS,
              // unixToDateHelper(response.data)
              formatEventTime(response.data)
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_CONFLUENCE_MEETINGS_FAILURE,
              response.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_MEETINGS_FAILURE,
            error.toString()
          )
        );
      }
    );
  };
}

function getTeamConfluenceUpdate(teamKey) {
  return (dispatch) => {
    userService.getTeamConfluenceUpdate(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_CONFLUENCE_UPDATE_SUCCESS,
              formatConHeatmapUpdateData(response.data)
            )
          );
        } else {
          dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_UPDATE_FAILURE,
            response.message
          )
        );
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_TEAM_CONFLUENCE_UPDATE_FAILURE,
            error.toString()
          )
        );
      }
    );
  };
}

function setTeamInfo(
  teamKey,
  jiraUrl,
  githubURLFrontend,
  githubUsername,
  githubPassword,
  githubURLBackend,
  githubToken
) {
  return (dispatch) => {
    dispatch(request(userConstants.SETTEAMINFO_REQUEST));
    return userService
      .setTeamInfo(teamKey, jiraUrl, githubURLFrontend, githubUsername, githubPassword,githubURLBackend,githubToken)
      .then(
        (response) => {
          if (checkRespCode(response)) {
            dispatch(
              success(userConstants.SETTEAMINFO_SUCCESS, {
                [teamKey]: {
                  teamKey,
                  jiraUrl,
                  githubURLFrontend,
                  githubUsername,
                  githubPassword,
                  githubURLBackend,
                  githubToken
                },
              })
            );
            successToast(response.message);
          } else {
            dispatch(failure(userConstants.SETTEAMINFO_FAILURE));
            failureToast(response.message);
          }
        },
        (error) => {
          dispatch(
            failure(userConstants.SETTEAMINFO_FAILURE, error.toString())
          );
          failureToast(error.toString());
        }
      );
  };
}

function getTeamCodeMetrics(teamKey) {
  return (dispatch) => {
    userService.getTeamCodeMetrics(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(userConstants.GET_TEAM_CODE_METRICS_SUCCESS, response.data)
          );
        } else {
          dispatch(
            failure(userConstants.GET_TEAM_CODE_METRICS_FAILURE, response.message)
          );
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_TEAM_CODE_METRICS_FAILURE, error.toString())
        );
      }
    );
  };
}

function getConfluenceIndividualData(teamKey) {
  return (dispatch) => {
    userService.getConfluenceIndividualData(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_SUCCESS,
              formatDonutChartData(response)
            )
          );
        } else {
          dispatch(
            failure(userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_FAILURE)
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_CONFLUENCE_PAGES_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getGithubIndividualData(teamKey) {
  return (dispatch) => {
    userService.getGithubIndividualData(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_SUCCESS,
              formatDonutChartData(response)
            )
          );
        } else {
          dispatch(
            failure(userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_FAILURE)
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_GITHUB_COMMITS_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getJiraIndividualData(teamKey) {
  return (dispatch) => {
    userService.getJiraIndividualData(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_INDIVIDUAL_JIRA_COUNTS_SUCCESS,
              formatDonutChartData(response)
            )
          );
        } else {
          dispatch(failure(userConstants.GET_INDIVIDUAL_JIRA_COUNTS_FAILURE));
          failureToast(response.msg);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_INDIVIDUAL_JIRA_COUNTS_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function getConfluenceSpaceByKeyWord(keyWord) {
  return (dispatch) => {
    dispatch(request(userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_REQUEST));
    userService.getConfluenceSpaceByKeyWord(keyWord).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_SUCCESS,
              response
            )
          );
        } else {
          dispatch(
            failure(userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_FAILURE)
          );
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(
          failure(
            userConstants.GET_CONFLUENCE_SPACE_BY_KEY_WORD_FAILURE,
            error.toString()
          )
        );
        failureToast(error.toString());
      }
    );
  };
}

function importProject(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.IMPORT_PROJECT_REQUEST));
    userService.importProject(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(success(userConstants.IMPORT_PROJECT_SUCCESS));
          successToast(response.message);
        } else {
          dispatch(failure(userConstants.IMPORT_PROJECT_FAILURE));
          failureToast(response.message);
        }
      },
      (error) => {
        dispatch(failure(userConstants.IMPORT_PROJECT_FAILURE));
        failureToast(error.toString());
      }
    );
  };
}

function deleteImportedProject(teamKey) {
  return (dispatch) => {
    dispatch(request(userConstants.DELETE_IMPORTED_PROJECT_REQUEST));
    userService.deleteImportedProject(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(success(userConstants.DELETE_IMPORTED_PROJECT_SUCCESS));
          successToast(response.msg);
        } else {
          dispatch(failure(userConstants.DELETE_IMPORTED_PROJECT_FAILUER));
          failureToast(response.msg);
        }
      },
      (error) => {
        dispatch(failure(userConstants.DELETE_IMPORTED_PROJECT_FAILUER));
        failureToast(error.toString());
      }
    );
  };
}

function getImportedProject() {
  return (dispatch) => {
    return userService.getImportedProject().then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(userConstants.GET_IMPORTED_PROJECT_SUCCESS, response.data)
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_IMPORTED_PROJECT_FAILURE,
              response.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_IMPORTED_PROJECT_FAILURE, error.toString())
        );
      }
    );
  };
}

function setCurrentTeamKey(teamKey) {
  return (dispatch) => {
    dispatch({ type: userConstants.SET_CURRENT_TEAM_KEY, payload: teamKey });
  };
}

function getTeamMemberList(teamKey) {
  return (dispatch) => {
    return userService.getTeamMemberList(teamKey).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(
            success(
              userConstants.GET_TEAM_MEMBER_LIST_SUCCESS,
              response.data.user_list
            )
          );
        } else {
          dispatch(
            failure(
              userConstants.GET_TEAM_MEMBER_LIST_FAILURE,
              response.message
            )
          );
        }
      },
      (error) => {
        dispatch(
          failure(userConstants.GET_TEAM_MEMBER_LIST_FAILURE, error.toString())
        );
      }
    );
  };
}

function setCurrentTeamName(teamName) {
  return (dispatch) => {
    dispatch({
      type: userConstants.SET_CURRENT_TEAM_NAME,
      payload: teamName,
    });
  };
}

function login(username, password) {
  return (dispatch) => {
    dispatch(request(userConstants.LOGIN_REQUEST), username);
    userService.login(username, password).then(
      (response) => {
        if (checkRespCode(response)) {
          dispatch(success(userConstants.LOGIN_SUCCESS, username));
          history.push("/coordinator");
        } else {
          dispatch(failure(userConstants.LOGIN_FAILURE, response.msg));
          failureToast(response.msg);
        }
      },
      (error) => {
        dispatch(failure(userConstants.LOGIN_FAILURE, error.toString()));
        failureToast(error.toString());
      }
    );
  };
}

function logout() {
  return (dispatch) => {
    dispatch({
      type: userConstants.LOGOUT_SUCCESS,
    });
  };
}
