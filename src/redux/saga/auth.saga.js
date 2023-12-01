import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { LOGIN_REQUEST, SIGNUP_REQUEST } from "../ActionTypes";
import { loginApi, signUpAPI } from "../../common/api/auth.api";
import { authError, loginError, loginResponse, signUpResponse } from "../action/auth.action";
import { setAlert } from "../slice/alert.slice";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions:-
function* SignUpUser(action) {
  try {
    const user = yield call(signUpAPI, action.payload);
    console.log(user.user);
    console.log(user.message);

    yield put(signUpResponse(user.user));
    yield put(setAlert({text : user.message , color : 'success'}));
  } catch (e) {
    yield put(authError(e.message));
    yield put(setAlert({text : e.message , color : 'error'}));

  }
}

function* loginUser(action){
  try{
    const user = yield call(loginApi, action.payload);
    console.log(user);
    yield put(loginResponse(user.user))
  }catch(e){
    console.log(e.message);
    yield put(loginError(e.message))
  }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
// Watcher Function :-
function* watchSaga() {
  yield takeEvery(SIGNUP_REQUEST, SignUpUser);
  yield takeEvery(LOGIN_REQUEST,loginUser);
}
 

export default function* authSaga() {
  yield all([watchSaga()]);
}
