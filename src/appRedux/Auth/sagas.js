import authActions from "./actions";
import  notification  from '../../components/Notification';
import { takeEvery, takeLatest, put, all, fork, call } from "@redux-saga/core/effects";

import { callAPI } from '../../util/callAPI'
function* loginUser({payload}) {
  try {
      let res = yield callAPI(
          "login",
          "POST",
          payload
      );
      
      if (res && res.token) {
          localStorage.setItem("token_id", res.token);
          yield put({ type: authActions.LOGIN_USER_SUCCESS, payload: res});
      }
      else {
          throw res // throw error into catch block
      }
  }
      
  catch (error) {
          notification("error", error.message, "");
          yield put({
              type: authActions.LOGIN_USER_FAILURE,
          });
      }
  
}
export default function* authSaga() {
  yield all([
      takeEvery(authActions.LOGIN_USER, loginUser)
  ]);
}
