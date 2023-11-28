import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'

import { SIGNUP_REQUEST } from '../ActionTypes'
import { signUpAPI } from '../../common/api/auth.api'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* SignUpUser(action) {
  try {
    const user = yield call(signUpAPI, action.payload)
    yield put({ type: 'USER_FETCH_SUCCEEDED', user: user})
  } catch (e) {
    yield put({ type: 'USER_FETCH_FAILED', message: e.message })
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// Watcher Function :-
function* watchSaga() {
  yield takeEvery(SIGNUP_REQUEST  , SignUpUser)
}
 
export default function* authSaga(){
    yield all([
        watchSaga(),
    ])
}




