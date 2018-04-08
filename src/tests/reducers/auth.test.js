import authReducer from '../../reducers/auth';

test('initialize authReducer', () => {
  const state = authReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({ });
});

test('AuthReducer login', () => {
  const action = {
    type: 'LOGIN',
    uid: 'abcdefg'
  };
  const state = authReducer({ }, action);
  expect(state.uid).toEqual(action.uid);
});

test('AuthReducer logout', () => {
  const action = {
    type: 'LOGOUT'
  };
  const state = authReducer({ uid: 'anything' }, action);
  expect(state).toEqual({ });
});
