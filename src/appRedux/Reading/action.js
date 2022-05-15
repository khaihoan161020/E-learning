const DOCUMENT = "READ_";
const readActions = {
    // TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

    FETCH_DATA_READ: DOCUMENT + "FETCH_DATA_READ",
    FETCH_DATA_READ_SUCCESS: DOCUMENT + "FETCH_DATA_READ_SUCCESS",
    FETCH_DATA_READ_FAILURE: DOCUMENT + "FETCH_DATA_READ_FAILURE",

    // ADD_DATA_VOCAB: DOCUMENT + "ADD_DATA_VOCAB",
    // ADD_DATA_VOCAB_SUCCESS: DOCUMENT + "ADD_DATA_VOCAB_SUCCESS",
    // ADD_DATA_VOCAB_FAILURE: DOCUMENT + "ADD_DATA_VOCAB_FAILURE",

    // EDIT_VOCAB: DOCUMENT + "EDIT_VOCAB",
    // EDIT_VOCAB_SUCCESS: DOCUMENT + "EDIT_VOCAB_SUCCESS",
    // EDIT_VOCAB_FAILURE: DOCUMENT + "EDIT_VOCAB_FAILURE",

    // DELETE_VOCAB: DOCUMENT + "DELETE_VOCAB",
    // DELETE_VOCAB_SUCCESS: DOCUMENT + "DELETE_VOCAB_SUCCESS",
    // DELETE_VOCAB_FAILURE: DOCUMENT + "DELETE_VOCAB_FAILURE",
    // toggleModal: (data = null) => {
    //     return ({
    //         type: vocabActions.TOGGLE_MODAL,
    //         payload: data
    //     })
    // },
    fetchRead: (data) => {
        return ({
            type: readActions.FETCH_DATA_READ,
            payload: data
        })
    },
    // addVocab: (data) => {
    //     return ({
    //         type: vocabActions.ADD_DATA_VOCAB,
    //         payload: data
    //     })
    // },
    // editVocab: (data) => {
    //     return ({
    //         type: vocabActions.EDIT_VOCAB,
    //         payload: data
    //     })
    // },
    // deleteVocabbyID: (data) => {
    //     return ({
    //         type: vocabActions.DELETE_VOCAB,
    //         payload: data
    //     })
    // }
}
export default readActions;