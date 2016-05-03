import React from 'react';
import {connect} from 'react-redux';
import Navigator from './ApiBrowser/Navigator';
import Response from './ApiBrowser/Response';
import fetchApi from './../actions/fetch-api.js';

const ApiBrowser = ({
  response,
  onSendRequest
}) => {
  return (
    <div className="api-browser">
      <Navigator onSendRequest={onSendRequest} />
      <Response status={response.status} body={response.body} />
    </div>
  );
};

ApiBrowser.displayName = 'ApiBrowser';
ApiBrowser.propTypes = {
  response: React.PropTypes.shape({
    status: React.PropTypes.number,
    body: React.PropTypes.string
  }),
  onSendRequest: React.PropTypes.func
};

const mapStateToProps = (state) => {
  return {
    response: state.response
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSendRequest: (endpoint = '') => dispatch(fetchApi(endpoint))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApiBrowser);
