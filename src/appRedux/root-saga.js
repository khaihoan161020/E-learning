import {all} from "redux-saga/effects";
import authSagas from "./Auth/sagas";
import userSaga from "./User/sagas"
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    userSaga()
  ]);
}
