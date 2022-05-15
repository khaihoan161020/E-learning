import vocabActions from './action';
import  notification  from '../../components/Notification';
import { takeEvery, takeLatest, put, all, fork, call } from "@redux-saga/core/effects";

import { callAPI } from '../../util/callAPI'

function* fetchVocabLoad() {
    yield takeLatest(vocabActions.FETCH_DATA_VOCAB, function* ({ payload }) {
        try {
            let res = yield callAPI(
                "vocab/getAll",
                "POST",
                payload
            );
            if (res && res.status === 1) {
                yield put({
                    type: vocabActions.FETCH_DATA_VOCAB_SUCCESS,
                    payload: res.data
                });
            } 
        } catch (error) {
            notification("error", error.message, "");
            yield put({
                type: vocabActions.FETCH_DATA_VOCAB_FAILURE,
                payload: error,
            });
            }
        }
    );
}

function* addVocabList({payload}) {
    try {
        let res = yield callAPI(
            "vocab",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            // console.log('res', res)
            notification("success", "Add successfully", "");
            yield put({ type: vocabActions.ADD_DATA_VOCAB_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: vocabActions.ADD_DATA_VOCAB_FAILURE,
            });
        }
}

function* editVocabList({payload}) {
    try {
        let res = yield callAPI(
            "vocab/updateInfo",
            "POST",
            payload
        );
        
        if (res && res.status === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: vocabActions.EDIT_VOCAB_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: vocabActions.EDIT_VOCAB_FAILURE,
            });
        }
    
}

function* deleteVocab({payload}) {
    console.log(payload);
    try {
        let res = yield callAPI(
            `vocab/${payload}`,
            "DELETE",
            null
        );
        
        if (res && res.CODE === 1) {
            console.log('res', res)
            notification("success", res.message , "");
            yield put({ type: vocabActions.DELETE_VOCAB_SUCCESS });
        }
        else {
            throw res // throw error into catch block
        }
    }
        
    catch (error) {
            notification("error", error.message, "");
            yield put({
                type: vocabActions.DELETE_VOCAB_FAILURE,
            });
        }
    
}

export default function* vocabSaga() {
    yield all([
        fork(fetchVocabLoad),
        takeLatest(vocabActions.ADD_DATA_VOCAB, addVocabList),
        takeEvery(vocabActions.EDIT_VOCAB, editVocabList),
        takeEvery(vocabActions.DELETE_VOCAB, deleteVocab)
    ]);
}
