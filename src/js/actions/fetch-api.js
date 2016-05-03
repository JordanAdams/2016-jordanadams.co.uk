import fetch from 'isomorphic-fetch';

const fetchApiStart = () => {
  return {type: 'FETCH_API_REQUEST'};
};

const fetchApiSuccess = (status, body) => {
  return {
    type: 'FETCH_API_SUCCESS',
    payload: {status, body}
  };
};

const fetchApi = (endpoint = '') => {
  return (dispatch) => {
    dispatch(fetchApiStart());

    fetch(`http://localhost:3002/${endpoint}`)
      .then(res => res.text())
      .then(body => {
        dispatch(fetchApiSuccess(200, body));
      })
      .catch(err => console.error(err));
  };
};

export default fetchApi;
