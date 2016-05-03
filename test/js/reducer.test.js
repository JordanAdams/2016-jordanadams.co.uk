import test from 'ava';
import deepFreeze from 'deep-freeze';
import reducer from '../../src/js/reducer';

test('Handles unknown actions', (t) => {
  const before = {};
  const after = {};
  const action = {type: 'THIS_IS_NOT_AN_ACTION', payload: 1};

  deepFreeze(before);

  t.deepEqual(reducer(before, action), after);
});
