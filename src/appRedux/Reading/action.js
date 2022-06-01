const DOCUMENT = "READ_";
const readActions = {
    TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

    FETCH_DATA_READ: DOCUMENT + "FETCH_DATA_READ",
    FETCH_DATA_READ_SUCCESS: DOCUMENT + "FETCH_DATA_READ_SUCCESS",
    FETCH_DATA_READ_FAILURE: DOCUMENT + "FETCH_DATA_READ_FAILURE",

    ADD_DATA_READ: DOCUMENT + "ADD_DATA_READ",
    ADD_DATA_READ_SUCCESS: DOCUMENT + "ADD_DATA_READ_SUCCESS",
    ADD_DATA_READ_FAILURE: DOCUMENT + "ADD_DATA_READ_FAILURE",

    EDIT_READ: DOCUMENT + "EDIT_READ",
    EDIT_READ_SUCCESS: DOCUMENT + "EDIT_READ_SUCCESS",
    EDIT_READ_FAILURE: DOCUMENT + "EDIT_READ_FAILURE",

    DELETE_READ: DOCUMENT + "DELETE_READ",
    DELETE_READ_SUCCESS: DOCUMENT + "DELETE_READ_SUCCESS",
    DELETE_READ_FAILURE: DOCUMENT + "DELETE_READ_FAILURE",

    NEW_GAME: DOCUMENT + "NEW_GAME",

    FETCH_QUESTION_QUIZ: DOCUMENT + "FETCH_QUESTION_QUIZ",
    FETCH_QUESTION_QUIZ_SUCCESS: DOCUMENT + "FETCH_QUESTION_QUIZ_SUCCESS",
    FETCH_QUESTION_QUIZ_FAILURE: DOCUMENT + "FETCH_QUESTION_QUIZ_FAILURE",

    POST_QUESTION_QUIZ: DOCUMENT + "POST_QUESTION_QUIZ",
    POST_QUESTION_QUIZ_SUCCESS: DOCUMENT + "POST_QUESTION_QUIZ_SUCCESS",
    toggleModal: (data = null) => {
        return ({
            type: readActions.TOGGLE_MODAL,
            payload: data
        })
    },
    fetchRead: (data) => {
        return ({
            type: readActions.FETCH_DATA_READ,
            payload: data
        })
    },
    addReadQues: (data) => {
        return ({
            type: readActions.ADD_DATA_READ,
            payload: data
        })
    },
    editReadQues: (data) => {
        return ({
            type: readActions.EDIT_READ,
            payload: data
        })
    },
    deleteReadbyID: (data) => {
        return ({
            type: readActions.DELETE_READ,
            payload: data
        })
    },
    newGameClient: () => {
        return ({
            type: readActions.NEW_GAME
        })
    },
    fetchQuizzRead: () => {
        return ({
            type: readActions.FETCH_QUESTION_QUIZ
        })
    },
    postDataQuizzRead: (data) => {
        return ({
            type: readActions.POST_QUESTION_QUIZ,
            payload: data
        })
    }
    
}
export default readActions;