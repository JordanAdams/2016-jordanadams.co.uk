const response = `{
  "success": true,
  "data": {
      "name": "Jordan Adams",
      "location": "Huddersfield, UK"
    },
    "links": {
      "self": "/",
      "projects": "/projects",
      "project": "/project/{id}",
      "social": "/social"
    }
  }
}`;

const initialState = {
  response: {
    isFetching: false,
    status: 200,
    body: response
  }
};

export default (state = initialState, action) => {
  console.log('ACTION: ', action);
  switch (action.type) {
    case 'FETCH_API_REQUEST':
      return {
        ...state,
        response: {...state.response, isFetching: true}
      };

    case 'FETCH_API_SUCCESS':
      return {
        ...state,
        response: {
          ...state.response,
          isFetching: false,
          status: action.payload.status,
          body: action.payload.body
        }
      };

    default:
      return state;
  }
};
