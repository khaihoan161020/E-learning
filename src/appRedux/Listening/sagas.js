import listeningActions from "./actions";
import  notification  from '../../components/Notification';
import { takeEvery, takeLatest, put, all, fork, call } from "@redux-saga/core/effects";

import { callAPI } from '../../util/callAPI'

function* fetchUserLoad() {
    yield takeLatest(listeningActions.FETCH_DATA, function* ({ payload }) {
        try {
            let res = yield callAPI(
                "listening/getAll",
                "POST",
                payload
            );
            if (res && res.status === 1) {
                yield put({
                    type: listeningActions.FETCH_DATA_SUCCESS,
                    payload: res.data
                });
            } 
        } catch (error) {
            notification("error", error.message, "");
            yield put({
                type: listeningActions.FETCH_DATA_FAILURE,
                payload: error,
            });
            }
        }
    );
}
function* addListeningDashboard({payload}) {
    try {
        let res = yield callAPI(
            "listening",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: listeningActions.ADD_DATA_LISTENING_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: listeningActions.ADD_DATA_LISTENING_FAILURE,
            });
        }
    
}
function* editListening({payload}) {
    try {
        let res = yield callAPI(
            "listening/updateInfo",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            notification("success", res.message , "");
            yield put({ type: listeningActions.EDIT_LISTENING_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: listeningActions.EDIT_USER_FAILURE,
            });
        }
    
}
function* deleteListening({payload}) {
    try {
        let res = yield callAPI(
            `listening/${payload}`,
            "DELETE",
            null
        );
        
        if (res && res.status === 1) {
            notification("success", res.message , "");
            yield put({ type: listeningActions.DELETE_LISTENING_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: listeningActions.DELETE_LISTENING_FAILURE,
            });
        }
    
}
function* fetchQuizRead() {
    try {
        let res = yield callAPI(
            `listening/quiz`,
            "POST",
            null
        );
        
        if (res && res.status === 1) {
            yield put({ type: listeningActions.FETCH_QUESTION_QUIZ_SUCCESS, payload: res.data });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: listeningActions.FETCH_QUESTION_QUIZ_FAILURE,
            });
        }
    
}
function* postdataQuizRead({payload}) {
    try {
        let res = yield callAPI(
            `listening/postQuiz`,
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            yield put({ type: listeningActions.POST_QUESTION_QUIZ_SUCCESS });
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
            `listening/getDataQuiz`,
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            yield put({ type: listeningActions.GET_QUESTION_QUIZ_USER_SUCCESS, payload: res.data });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
        }
    
}
export default function* listeningSaga() {
    yield all([
        fork(fetchUserLoad),
        takeLatest(listeningActions.ADD_DATA_LISTENING, addListeningDashboard),
        takeEvery(listeningActions.EDIT_LISTENING, editListening),
        takeEvery(listeningActions.DELETE_LISTENING, deleteListening),
        takeEvery(listeningActions.FETCH_QUESTION_QUIZ, fetchQuizRead),
        takeEvery(listeningActions.POST_QUESTION_QUIZ, postdataQuizRead),
        takeEvery(listeningActions.GET_QUESTION_QUIZ_USER, getDataQuizRead),
    ]);
}
