import { call, takeEvery, all, put } from 'redux-saga/effects'
import { signInapi, signUpapi } from '../../comman/apis/auth.api';
import { setalertaction } from '../actions/alert.action';
import { signedinaction } from '../actions/signup.action';
import * as ActionTypes from '../actiontypes';

function* signUp(action) {
  try {
    const user = yield call(signUpapi, action.payload);
    yield put(setalertaction({ text: user.payload, color: 'success' }));
  } catch (e) {
    yield put(setalertaction({ text: e.payload, color: 'error' }));
  }
}
function* signIn(action) {
  try {
    const user = yield call(signInapi, action.payload);
    yield put(signedinaction({ user: user }))
    yield put(setalertaction({ text: "Login successfully.", color: 'success' }));
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