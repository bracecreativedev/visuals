import React, { Component } from "react";
import { connect } from "react-redux";
import { getProjectStatus } from "../../actions/projectActions";

class ProjectStatus extends Component {
  componentDidMount() {
    this.props.getProjectStatus();
    console.log(this.props.projects);
  }
  render() {
    const { status } = this.props.projects;

    return (
      <section className="main">
        <div className="heading">
          <h1 className="header">project status.</h1>
        </div>
        <div className="status">
          <div className="design design-status">
            <div className="number-circle">{status.design}</div>
            <h1 className="heading">design.</h1>
          </div>

          <div className="design development-status">
            <div className="number-circle">{status.development}</div>
            <h1 className="heading">development.</h1>
          </div>

          <div className="design hold-status">
            <div className="number-circle" style={{ color: "red" }}>
              {status.hold}
            </div>
            <h1 className="heading">on hold.</h1>
          </div>
        </div>

        <div className="activity">
          <div className="heading">Last Updated:</div>
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
