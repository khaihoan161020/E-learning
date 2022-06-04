import readActions from './action';
import  notification  from '../../components/Notification';
import { takeEvery, takeLatest, put, all, fork, call } from "@redux-saga/core/effects";

import { callAPI } from '../../util/callAPI'

function* fetchReadLoad() {
    yield takeLatest(readActions.FETCH_DATA_READ, function* ({ payload }) {
        try {
            let res = yield callAPI(
                "reading/getAll",
                "POST",
                payload
            );
            if (res && res.status === 1) {
                yield put({
                    type: readActions.FETCH_DATA_READ_SUCCESS,
                    payload: res.data
                });
            } 
        } catch (error) {
            notification("error", error.message, "");
            yield put({
                type: readActions.FETCH_DATA_READ_FAILURE,
                payload: error,
            });
            }
        }
    );
}

function* addReadList({payload}) {
    try {
        let res = yield callAPI(
            "reading",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            // console.log('res', res)
            notification("success", "Add successfully", "");
            yield put({ type: readActions.ADD_DATA_READ_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: readActions.ADD_DATA_READ_FAILURE,
            });
        }
}

function* editReadList({payload}) {
    try {
        let res = yield callAPI(
            "reading/updateInfo",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: readActions.EDIT_READ_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: readActions.EDIT_READ_FAILURE,
            });
        }
    
}

function* deleteRead({payload}) {
    console.log(payload);
    try {
        let res = yield callAPI(
            `reading/${payload}`,
            "DELETE",
            null
        );
        
        if (res && res.CODE === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: readActions.DELETE_READ_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: readActions.DELETE_READ_FAILURE,
            });
        }
    
}
function* fetchQuizRead() {
    try {
        let res = yield callAPI(
            `reading/quiz`,
            "POST",
            null
        );
        
        if (res && res.status === 1) {
            yield put({ type: readActions.FETCH_QUESTION_QUIZ_SUCCESS, payload: res.data });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: readActions.FETCH_QUESTION_QUIZ_FAILURE,
            });
        }
    
}
function* postdataQuizRead({payload}) {
    try {
        let res = yield callAPI(
            `reading/postQuiz`,
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            yield put({ type: readActions.POST_QUESTION_QUIZ_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
        }
    
}
function* getDataQuizRead({payload}) {
    try {
        let res = yield callAPI(
            `reading/getDataQuiz`,
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            yield put({ type: readActions.GET_QUESTION_QUIZ_USER_SUCCESS, payload: res.data });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
        }
    
}
export default function* readSaga() {
    yield all([
        fork(fetchReadLoad),
        takeLatest(readActions.ADD_DATA_READ, addReadList),
        takeEvery(readActions.EDIT_READ, editReadList),
        takeEvery(readActions.DELETE_READ, deleteRead),
        takeEvery(readActions.FETCH_QUESTION_QUIZ, fetchQuizRead),
        takeEvery(readActions.POST_QUESTION_QUIZ, postdataQuizRead),
        takeEvery(readActions.GET_QUESTION_QUIZ_USER, getDataQuizRead),
    ]);
}
