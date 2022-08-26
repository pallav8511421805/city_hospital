import { call, takeEvery, all, put } from 'redux-saga/effects'
import { signInapi, signUpapi } from '../../comman/apis/auth.api';
import { setalertaction } from '../actions/alert.action';
import * as ActionTypes from '../actiontypes';

function* signUp(action) {
  try {
    const user = yield call(signUpapi, action.payload);
    console.log(user);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
  } catch (e) {
    console.log(e);
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}
function* signIn(action) {
  try {
    const user = yield call(signInapi, action.payload);
    yield put(setalertaction({ text: user.payload, color: 'success' }));
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }));
  }
}

function* WatchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}
function* WatchSignin() {
  yield takeEvery(ActionTypes.SIGN_IN, signIn);
}

export default function* authSaga() {
  yield all([
    WatchSignUp(),
    WatchSignin()
  ])
}