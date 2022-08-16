import { all } from "redux-saga/effects";
import authSaga from "../../redux/saga/auth.saga";

export default function* rootSaga() {
    yield all([
      authSaga()
    ])
  }