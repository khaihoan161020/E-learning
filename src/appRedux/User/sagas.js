import userActions from "./actions";
import  notification  from '../../components/Notification';
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
function* addUseDashboard({payload}) {
    try {
        let res = yield callAPI(
            "register",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            console.log('res', res)
            notification("success", "Register successfully", "");
            yield put({ type: userActions.ADD_DATA_USER_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: userActions.ADD_DATA_USER_FAILURE,
            });
        }
    
}
function* editUser({payload}) {
    try {
        let res = yield callAPI(
            "user/update",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: userActions.EDIT_USER_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: userActions.EDIT_USER_FAILURE,
            });
        }
    
}
function* deleteUser({payload}) {
    try {
        let res = yield callAPI(
            `user/${payload}`,
            "DELETE",
            null
        );
        
        if (res && res.status === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: userActions.DELETE_USER_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: userActions.DELETE_USER_FAILURE,
            });
        }
    
}

export default function* userSaga() {
    yield all([
        fork(fetchUserLoad),
        takeLatest(userActions.ADD_DATA_USER, addUseDashboard),
        takeEvery(userActions.EDIT_USER, editUser),
        takeEvery(userActions.DELETE_USER, deleteUser)
    ]);
}
