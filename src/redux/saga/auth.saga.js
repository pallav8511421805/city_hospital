import { call, put, takeEvery, all } from 'redux-saga/effects'
import * as ActionTypes from '../actiontypes';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* signUp(action) {
   try {
      const user = yield call(Api.fetchUser, action.payload.userId);
    //   yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
    //   yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}

function* watch() {
  yield takeEvery(ActionTypes.signup, signUp);
}

export default function* authSaga() {
    yield all([
      watch()
    ])
  }