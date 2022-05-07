import userActions from "./actions";
import { notification } from 'antd';
import { takeEvery, takeLatest, put, all, fork, call } from "@redux-saga/core/effects";

import { callAPI } from '../../util/callAPI'

function* fetchUserLoad() {
    yield takeLatest(userActions.FETCH_DATA_USER, function* ({ payload }) {
        try {
            let res = yield callAPI(
                "users/getAll",
                "POST",
                payload
            );
            if (res && res.status === 1) {
                yield put({
                    type: userActions.FETCH_DATA_USER_SUCCESS,
                    payload: res.data
                });
            } 
        } catch (error) {
            notification("error", error.message, "");
            yield put({
                type: userActions.FETCH_DATA_USER_FAILURE,
                payload: error,
            });
        }
        }
    );
}


export default function* userSaga() {
    yield all([
        fork(fetchUserLoad),
    ]);
}
