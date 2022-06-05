import listeningActions from './actions'

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    itemEdit: null,
    newGame: false,
    quizQuestion: null,
    dataQuizUser: [],
    quizPreviewItem: null,
}
export default function vendorsReducer(state = initState, action) { 
    switch (action.type) {
        case listeningActions.TOGGLE_MODAL:
            return {
                ...state,
                visibleModal: !state.visibleModal,
                itemEdit: action.payload,
                success: false
            }
        case listeningActions.TOGGLE_MODAL_PREVIEW_QUIZ:
            return {
                ...state,
                visibleModalPreview: !state.visibleModalPreview,
                quizPreviewItem: action.payload,
                success: false
            }
        case listeningActions.FETCH_DATA:
            return {
                ...state,
                loading: true,
                data: [],
            }
        case listeningActions.FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                }
        case listeningActions.FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case listeningActions.ADD_DATA_LISTENING:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case listeningActions.ADD_DATA_LISTENING_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case listeningActions.ADD_DATA_LISTENING_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case listeningActions.EDIT_LISTENING:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case listeningActions.EDIT_LISTENING_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case listeningActions.EDIT_LISTENING_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case listeningActions.DELETE_LISTENING:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case listeningActions.DELETE_LISTENING_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case listeningActions.DELETE_LISTENING_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case listeningActions.NEW_GAME:
            return {
                ...state,
                newGame: !state.newGame
            }
        case listeningActions.FETCH_QUESTION_QUIZ:
            return {
                ...state,
                loading: true,
                success: false,
                quizQuestion: null
            }
        case listeningActions.FETCH_QUESTION_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                quizQuestion: action.payload
            }
        case listeningActions.FETCH_QUESTION_QUIZ_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                quizQuestion: null
            }
        case listeningActions.POST_QUESTION_QUIZ:
            return {
                ...state,
                loading: true,
                success: true,
                quizQuestion: action.payload
            }
        case listeningActions.POST_QUESTION_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case listeningActions.GET_QUESTION_QUIZ_USER:
            return {
                ...state,
                loading: true,
                success: false,
                dataQuizUser: [],
            }
        case listeningActions.GET_QUESTION_QUIZ_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                dataQuizUser: action.payload,
                }
        default: 
            return state;
    }

}