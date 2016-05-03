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
  return async function (dispatch) {
    dispatch(fetchApiStart());

    try {
      const res = await fetch(`http://localhost:3002/${endpoint}`);
      const status = res.status;
      const body = await res.text();
      dispatch(fetchApiSuccess(status, body));
    } catch (err) {
      console.error(err);
    }
  };
};

export default fetchApi;
