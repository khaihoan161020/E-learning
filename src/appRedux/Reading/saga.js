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

// function* addVocabList({payload}) {
//     try {
//         let res = yield callAPI(
//             "vocab",
//             "POST",
//             payload
//         );
        
//         if (res && res.status === 1) {
//             // console.log('res', res)
//             notification("success", "Add successfully", "");
//             yield put({ type: vocabActions.ADD_DATA_VOCAB_SUCCESS });
//         }
//         else {
//             throw res // throw error into catch block
//         }
//     }
        
//     catch (error) {
//             notification("error", error.message, "");
//             yield put({
//                 type: vocabActions.ADD_DATA_VOCAB_FAILURE,
//             });
//         }
// }

// function* editVocabList({payload}) {
//     try {
//         let res = yield callAPI(
//             "vocab/updateInfo",
//             "POST",
//             payload
//         );
        
//         if (res && res.status === 1) {
//             console.log('res', res)
//             notification("success", res.message , "");
//             yield put({ type: vocabActions.EDIT_VOCAB_SUCCESS });
//         }
//         else {
//             throw res // throw error into catch block
//         }
//     }
        
//     catch (error) {
//             notification("error", error.message, "");
//             yield put({
//                 type: vocabActions.EDIT_VOCAB_FAILURE,
//             });
//         }
    
// }

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

export default function* readSaga() {
    yield all([
        fork(fetchReadLoad),
        // takeLatest(vocabActions.ADD_DATA_VOCAB, addVocabList),
        // takeEvery(vocabActions.EDIT_VOCAB, editVocabList),
        takeEvery(readActions.DELETE_READ, deleteRead)
    ]);
}