import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.msg.username) {
        alert.error(`Username: ${error.msg.username.join()}`);
      }
     if (error.msg.password) {
       alert.error(`Password: ${error.msg.password.join()}`);
     }
      if (error.msg.non_field_errors) {
        alert.error(error.msg.non_field_errors.join());
      }
      
    }

    if (message !== prevProps.message) {
      if (message.addTask) {
        console.log("added");
        alert.success(message.addTask);
      }
      if (message.updateTask) {
        alert.success(message.updateTask);
      }
      if (message.deleteTask) {
        alert.success(message.deleteTask);
      }
      if (message.passwordNotMatch) {
        alert.error(message.passwordNotMatch);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
