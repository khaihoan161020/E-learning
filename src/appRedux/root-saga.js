import {all} from "redux-saga/effects";
import authSagas from "./Auth/sagas";
import userSaga from "./User/sagas"
import vocabSaga from "./Vocab/saga"
import readSaga from "./Reading/saga";
import listeningSaga from "./Listening/sagas"
export default function* rootSaga(getState) {
  yield all([
    authSagas(),
    userSaga(),
    vocabSaga(),
    readSaga(),
    listeningSaga()
  ]);
}
