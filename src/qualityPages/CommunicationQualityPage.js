import React from "react";
import Banner from "../_utils/Banner";
import uomHeader from "../header/uomheader";
import { userActions } from "../_actions";
import { connect } from "react-redux";
import Table from "../_utils/Table";
import { alertConstants } from "../_constants";
import { InformationalNote } from "../_utils/Alert";
import CustomisedCalendar from "../_utils/Calendar";
import Events from "../_utils/Events";
import { events2Dates, eventsFilter} from "../_utils/EventInfoExtractor"

class CommunicationPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          name: "Meeting Name",
          selector: "title",
        },

        {
          name: "Meeting Minutes",
          selector: "link",
          cell: (row) => <a href={row.link}>{row.link}</a>,
        },
      ],
      hasConfig:
        this.props.teamInfo && this.props.teamInfo[this.props.currentTeamKey],
      events:
        this.props.getCalendarEvents(currentTeamKey),
    };
  }

  componentDidMount() {
    if (this.state.hasConfig) {
      this.props.getTeamConfluenceMeeting(this.props.currentTeamKey);
    }
  }

  render() {
    return (
      <div className="uomcontent">
        {uomHeader("Communication")}

        <div role="main">
          <div className="page-inner">
            <Banner projName={this.props.currentTeamName} />
            {!this.state.hasConfig && (
              <InformationalNote message={alertConstants.NO_CONFIG} />
            )}
            {this.state.hasConfig &&
              (!this.props.confluenceData ||
                this.props.confluenceData.length == 0) && (
                <InformationalNote
                  message={alertConstants.NO_MEETING_MINUTES}
                />
              )}
            {this.state.hasConfig &&
              this.props.confluenceData &&
              this.props.confluenceData.length != 0 && (
                <Table
                  columns={this.state.columns}
                  data={this.props.confluenceData}
                  width={"80vw"}
                  height={"50vh"}
                />
              )}
          </div>
        </div>

        <div>
          <CustomisedCalendar
            events={this.props.confluenceData}
            keyDateList={events2Dates(eventsFilter(this.props.confluenceData, 'Key date'))}
            meetingList={events2Dates(eventsFilter(this.props.confluenceData, 'Meeting'))}
            standupList={events2Dates(eventsFilter(this.props.confluenceData, 'Standup'))}
          />  
        </div>
      </div>
    );
  }
}

function mapState(state) {
  return {
    confluenceData: state.user.teamConfluenceMeeting,
    currentTeamKey: state.user.currentTeamKey,
    currentTeamName: state.user.currentTeamName,
    teamInfo: state.user.teamInfo,
    events: state.user.calendarEvents,
  };
}

const actionCreators = {
  getTeamConfluenceMeeting: userActions.getTeamConfluenceMeeting,
  getCalendarEvents: userActions.getCalendarEvents,
};

const Communication = connect(mapState, actionCreators)(CommunicationPage);
export { Communication as CommunicationQualityPage };
