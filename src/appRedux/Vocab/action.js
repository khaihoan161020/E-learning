const DOCUMENT = "VOCAB_";
const vocabActions = {
    // TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

    FETCH_DATA_VOCAB: DOCUMENT + "FETCH_DATA_VOCAB",
    FETCH_DATA_VOCAB_SUCCESS: DOCUMENT + "FETCH_DATA_VOCAB_SUCCESS",
    FETCH_DATA_VOCAB_FAILURE: DOCUMENT + "FETCH_DATA_VOCAB_FAILURE",

    // ADD_DATA_USER: DOCUMENT + "ADD_DATA_USER",
    // ADD_DATA_USER_SUCCESS: DOCUMENT + "ADD_DATA_USER_SUCCESS",
    // ADD_DATA_USER_FAILURE: DOCUMENT + "ADD_DATA_USER_FAILURE",

    // EDIT_USER: DOCUMENT + "EDIT_USER",
    // EDIT_USER_SUCCESS: DOCUMENT + "EDIT_USER_SUCCESS",
    // EDIT_USER_FAILURE: DOCUMENT + "EDIT_USER_FAILURE",

    // DELETE_USER: DOCUMENT + "DELETE_USER",
    // DELETE_USER_SUCCESS: DOCUMENT + "DELETE_USER_SUCCESS",
    // DELETE_USER_FAILURE: DOCUMENT + "DELETE_USER_FAILURE",
    // toggleModal: (data = null) => {
    //     return ({
    //         type: userActions.TOGGLE_MODAL,
    //         payload: data
    //     })
    // },
    fetchVocab: (data) => {
        return ({
            type: vocabActions.FETCH_DATA_VOCAB,
            payload: data
        })
    },
    // addUser: (data) => {
    //     return ({
    //         type: userActions.ADD_DATA_USER,
    //         payload: data
    //     })
    // },
    // editUser: (data) => {
    //     return ({
    //         type: userActions.EDIT_USER,
    //         payload: data
    //     })
    // },
    // deleteUserbyID: (data) => {
    //     return ({
    //         type: userActions.DELETE_USER,
    //         payload: data
    //     })
    // }
}
export default vocabActions;