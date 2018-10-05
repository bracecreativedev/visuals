import React, { Component } from "react";
import { connect } from "react-redux";
import moment from "moment";
import { getProjectStatus } from "../../actions/projectActions";

class ProjectStatus extends Component {
  componentDidMount() {
    this.props.getProjectStatus();

    console.log(this.props.projects);

    // Update component every 30 minutes
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      1000 * 60 * 29
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { status } = this.props.projects;

    const date = new Date().toString();

    let designColor;
    let developmentColor;
    let holdColor;

    if (status.design) {
      if (20 <= status.design) {
        designColor = "red";
      } else if (status.design > 10 && status.design < 20) {
        designColor = "amber";
      } else if (status.design <= 10) {
        designColor = "green";
      }

      if (20 <= status.development) {
        developmentColor = "red";
      } else if (status.development > 10 && status.development < 20) {
        developmentColor = "amber";
      } else if (status.development <= 10) {
        developmentColor = "green";
      }

      if (20 <= status.hold) {
        holdColor = "red";
      } else if (status.hold > 10 && status.hold < 20) {
        holdColor = "amber";
      } else if (status.hold <= 10) {
        holdColor = "green";
      }
    }

    return (
      <section className="main">
        <div className="heading">
          <h1 className="header">project status.</h1>
        </div>
        <div className="status">
          <div className="design design-status">
            <div className={`number-circle ${designColor}`}>
              {status.design}
            </div>
            <h1 className="heading">design.</h1>
          </div>

          <div className="design development-status">
            <div className={`number-circle ${developmentColor}`}>
              {status.development}
            </div>
            <h1 className="heading">development.</h1>
          </div>

          <div className="design hold-status">
            <div className={`number-circle ${holdColor}`}>{status.hold}</div>
            <h1 className="heading">on hold.</h1>
          </div>
        </div>

        <div className="activity">
          <div className="heading">
            Last Updated: {moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  projects: state.projects
});

export default connect(
  mapStateToProps,
  { getProjectStatus }
)(ProjectStatus);
