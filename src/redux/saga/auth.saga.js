import { all, call, put, takeEvery, takeLatest } from "redux-saga/effects";

import { FPASSWORDREQUEST, LOGIN_REQUEST, LOGOUT_REQUEST, SIGNUP_REQUEST } from "../ActionTypes";
import { fPasswordApi, logOutApi, loginApi, signUpAPI } from "../../common/api/auth.api";
import { authError, fPasswordResponse, fpasswordError, loginError, loginResponse, logoutResponse, signUpResponse } from "../action/auth.action";
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
    const user = yield call(loginApi, action.payload.data);
    yield put(loginResponse(user.user))
    yield put(setAlert({text : user.message , color : 'success'}));
    action.payload.callback("/");
  }catch(e){
    console.log(e.message);
    yield put(loginError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}));
  }
}


function* fPassword(action){
  try{
    const user = yield call(fPasswordApi ,action.payload);
    console.log(user);
    yield put(fPasswordResponse(user.user))
    yield put(setAlert({text : user.message , color : 'success'}))

  }catch(e){
    console.log(e.message);
    yield put(fpasswordError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}));

  }
}

function* logOutUser(action){
  try{
    const user = yield call(logOutApi);
    yield put(logoutResponse(user.user))
    yield put(setAlert({text : user.message , color : 'success'}));
  }catch(e){
    console.log(e.message);
    yield put(loginError(e.message))
    yield put(setAlert({text : e.message , color : 'error'}));
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
  yield takeEvery(FPASSWORDREQUEST,fPassword);
  yield takeEvery(LOGOUT_REQUEST,logOutUser);
}
 

export default function* authSaga() {
  yield all([watchSaga()]);
}
