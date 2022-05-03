import {all} from "redux-saga/effects";
import authSagas from "./Auth/sagas";

export default function* rootSaga(getState) {
  yield all([
    authSagas(),
  ]);
}
