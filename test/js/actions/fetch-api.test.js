import test from 'ava';
import sinon from 'sinon';
import proxyquire from 'proxyquire';

const fetchStub = sinon.stub().returns(
  Promise.resolve({
    text: sinon.stub().returns(Promise.resolve('response'))
  })
);

const dispatch = sinon.spy();

const fetchApi = proxyquire('../../../src/js/actions/fetch-api', {
  'isomorphic-fetch': fetchStub
}).default;

test('Handles a working API call', (t) => {
  fetchApi('example')(dispatch);

  t.true(fetchStub.calledOnce);
  t.true(dispatch.calledWith({
    type: 'FETCH_API_REQUEST'
  }));
  t.true(dispatch.calledWith({
    type: 'FETCH_API_SUCCESS',
    payload: {
      status: 200,
      body: 'response'
    }
  }));
});
