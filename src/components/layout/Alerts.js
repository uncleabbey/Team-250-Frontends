/* eslint-disable complexity */
/* eslint-disable max-statements */
/* eslint-disable sort-imports */
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';


class Alerts extends Component {
  static propTypes = {
    alert: PropTypes.object.isRequired,
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired
  }

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.email) alert.error(`Email: ${error.msg.email.join()}`);
      if (error.msg.message) alert.error(`Message: ${error.msg.message}`);
      if (error.msg.detail) alert.error(`Message: ${error.msg.detail}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.username) alert.error(error.msg.username.join());
    }
    if (message !== prevProps.message) {
      if (message.passwordNotMatch) alert.error(message.passwordNotMatch);
      if (message.addProduct) alert.success(message.addProduct);
      if (message.addCart) alert.success(message.addCart);
      if (message.removeCart) alert.success(message.removeCart);
    }
  }

  render() {
    return (
      <Fragment />
    );
  }
}
const MapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages
});
export default connect(MapStateToProps)(withAlert()(Alerts));
