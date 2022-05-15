const DOCUMENT = "VOCAB_";
const vocabActions = {
    TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

    FETCH_DATA_VOCAB: DOCUMENT + "FETCH_DATA_VOCAB",
    FETCH_DATA_VOCAB_SUCCESS: DOCUMENT + "FETCH_DATA_VOCAB_SUCCESS",
    FETCH_DATA_VOCAB_FAILURE: DOCUMENT + "FETCH_DATA_VOCAB_FAILURE",

    ADD_DATA_VOCAB: DOCUMENT + "ADD_DATA_VOCAB",
    ADD_DATA_VOCAB_SUCCESS: DOCUMENT + "ADD_DATA_VOCAB_SUCCESS",
    ADD_DATA_VOCAB_FAILURE: DOCUMENT + "ADD_DATA_VOCAB_FAILURE",

    EDIT_VOCAB: DOCUMENT + "EDIT_VOCAB",
    EDIT_VOCAB_SUCCESS: DOCUMENT + "EDIT_VOCAB_SUCCESS",
    EDIT_VOCAB_FAILURE: DOCUMENT + "EDIT_VOCAB_FAILURE",

    DELETE_VOCAB: DOCUMENT + "DELETE_VOCAB",
    DELETE_VOCAB_SUCCESS: DOCUMENT + "DELETE_VOCAB_SUCCESS",
    DELETE_VOCAB_FAILURE: DOCUMENT + "DELETE_VOCAB_FAILURE",
    toggleModal: (data = null) => {
        return ({
            type: vocabActions.TOGGLE_MODAL,
            payload: data
        })
    },
    fetchVocab: (data) => {
        return ({
            type: vocabActions.FETCH_DATA_VOCAB,
            payload: data
        })
    },
    addVocab: (data) => {
        return ({
            type: vocabActions.ADD_DATA_VOCAB,
            payload: data
        })
    },
    editVocab: (data) => {
        return ({
            type: vocabActions.EDIT_VOCAB,
            payload: data
        })
    },
    deleteVocabbyID: (data) => {
        return ({
            type: vocabActions.DELETE_VOCAB,
            payload: data
        })
    }
}
export default vocabActions;