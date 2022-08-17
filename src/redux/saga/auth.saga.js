import { call, put, takeEvery, all } from 'redux-saga/effects'
import { signUpapi } from '../../comman/apis/auth.api';
import * as ActionTypes from '../actiontypes';

function* signUp(action) {
   try {
      const user = yield call(signUpapi, action.payload);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* WatchSignUp() {
  yield takeEvery(ActionTypes.SIGN_UP, signUp);
}

export default function* authSaga() {
    yield all([
      WatchSignUp()
    ])
  }