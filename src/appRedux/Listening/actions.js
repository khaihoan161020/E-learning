const DOCUMENT = "LISTENING_";
const listeningActions = {
    TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

    FETCH_DATA: DOCUMENT + "FETCH_DATA",
    FETCH_DATA_SUCCESS: DOCUMENT + "FETCH_DATA_SUCCESS",
    FETCH_DATA_FAILURE: DOCUMENT + "FETCH_DATA_FAILURE",

    ADD_DATA_LISTENING: DOCUMENT + "ADD_DATA_LISTENING",
    ADD_DATA_LISTENING_SUCCESS: DOCUMENT + "ADD_DATA_LISTENING_SUCCESS",
    ADD_DATA_LISTENING_FAILURE: DOCUMENT + "ADD_DATA_LISTENING_FAILURE",

    EDIT_LISTENING: DOCUMENT + "EDIT_LISTENING",
    EDIT_LISTENING_SUCCESS: DOCUMENT + "EDIT_LISTENING_SUCCESS",
    EDIT_LISTENING_FAILURE: DOCUMENT + "EDIT_LISTENING_FAILURE",

    DELETE_LISTENING: DOCUMENT + "DELETE_LISTENING",
    DELETE_LISTENING_SUCCESS: DOCUMENT + "DELETE_LISTENING_SUCCESS",
    DELETE_LISTENING_FAILURE: DOCUMENT + "DELETE_LISTENING_FAILURE",
    toggleModal: (data = null) => {
        return ({
            type: listeningActions.TOGGLE_MODAL,
            payload: data
        })
    },
    fetchListening: (data) => {
        return ({
            type: listeningActions.FETCH_DATA,
            payload: data
        })
    },
    addListening: (data) => {
        return ({
            type: listeningActions.ADD_DATA_LISTENING,
            payload: data
        })
    },
    editListening: (data) => {
        return ({
            type: listeningActions.EDIT_LISTENING,
            payload: data
        })
    },
    deleteListeningbyID: (data) => {
        return ({
            type: listeningActions.DELETE_LISTENING,
            payload: data
        })
    }
}
export default listeningActions;