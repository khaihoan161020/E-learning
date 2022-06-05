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
    NEW_GAME: DOCUMENT + "NEW_GAME",

    FETCH_QUESTION_QUIZ: DOCUMENT + "FETCH_QUESTION_QUIZ",
    FETCH_QUESTION_QUIZ_SUCCESS: DOCUMENT + "FETCH_QUESTION_QUIZ_SUCCESS",
    FETCH_QUESTION_QUIZ_FAILURE: DOCUMENT + "FETCH_QUESTION_QUIZ_FAILURE",

    POST_QUESTION_QUIZ: DOCUMENT + "POST_QUESTION_QUIZ",
    POST_QUESTION_QUIZ_SUCCESS: DOCUMENT + "POST_QUESTION_QUIZ_SUCCESS",

    GET_QUESTION_QUIZ_USER: DOCUMENT + "GET_QUESTION_QUIZ_USER",
    GET_QUESTION_QUIZ_USER_SUCCESS: DOCUMENT + "GET_QUESTION_QUIZ_USER_SUCCESS",

    TOGGLE_MODAL_PREVIEW_QUIZ: DOCUMENT + "TOGGLE_MODAL_PREVIEW_QUIZ",
    toggleModal: (data = null) => {
        return ({
            type: listeningActions.TOGGLE_MODAL,
            payload: data
        })
    },
    toggleModalPreview: (data = null) => {
        return ({
            type: listeningActions.TOGGLE_MODAL_PREVIEW_QUIZ,
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
    },
    newGameClient: () => {
        return ({
            type: listeningActions.NEW_GAME
        })
    },
    fetchQuizzRead: () => {
        return ({
            type: listeningActions.FETCH_QUESTION_QUIZ
        })
    },
    postDataQuizzRead: (data) => {
        return ({
            type: listeningActions.POST_QUESTION_QUIZ,
            payload: data
        })
    },
    getQuizDataRead: (data) => {
        return ({
            type: listeningActions.GET_QUESTION_QUIZ_USER,
            payload: data
        })
    }
}
export default listeningActions;