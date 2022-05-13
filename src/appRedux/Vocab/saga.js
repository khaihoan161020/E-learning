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
                type: vocabActions.FETCH_DATA_VOCAB_SUCCESS,
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

// function* editUser({payload}) {
//     try {
//         let res = yield callAPI(
//             "user/update",
//             "POST",
//             payload
//         );
        
//         if (res && res.status === 1) {
//             console.log('res', res)
//             notification("success", res.message , "");
//             yield put({ type: userActions.EDIT_USER_SUCCESS });
//         }
//         else {
//             throw res // throw error into catch block
//         }
//     }
        
//     catch (error) {
//             notification("error", error.message, "");
//             yield put({
//                 type: userActions.EDIT_USER_FAILURE,
//             });
//         }
    
// }
// function* deleteUser({payload}) {
//     try {
//         let res = yield callAPI(
//             `user/${payload}`,
//             "DELETE",
//             null
//         );
        
//         if (res && res.status === 1) {
//             console.log('res', res)
//             notification("success", res.message , "");
//             yield put({ type: userActions.DELETE_USER_SUCCESS });
//         }
//         else {
//             throw res // throw error into catch block
//         }
//     }
        
//     catch (error) {
//             notification("error", error.message, "");
//             yield put({
//                 type: userActions.DELETE_USER_FAILURE,
//             });
//         }
    
// }

export default function* vocabSaga() {
    yield all([
        fork(fetchVocabLoad),
        takeLatest(vocabActions.ADD_DATA_VOCAB, addVocabList),
        // takeEvery(userActions.EDIT_USER, editUser),
        // takeEvery(userActions.DELETE_USER, deleteUser)
    ]);
}
