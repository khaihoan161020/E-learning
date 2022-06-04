import readActions from "./action";

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    visibleModalPreview: false,
    itemEdit: null,
    newGame: false,
    quizQuestion: null,
    dataQuizUser: [],
    quizPreviewItem: null,
}
export default function readReducer(state = initState, action) { 
    switch (action.type) {
        // Show modal
        case readActions.TOGGLE_MODAL:
            return {
                ...state,
                visibleModal: !state.visibleModal,
                itemEdit: action.payload,
                success: false
            }
        case readActions.TOGGLE_MODAL_PREVIEW_QUIZ:
            return {
                ...state,
                visibleModalPreview: !state.visibleModalPreview,
                quizPreviewItem: action.payload,
                success: false
            }
        // Fetch reading data
        case readActions.FETCH_DATA_READ:
            return {
                ...state,
                loading: true,
                data: [],
            }
        case readActions.FETCH_DATA_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                }
        case readActions.FETCH_DATA_READ_FAILURE:
            return {
                ...state,
                loading: false,
            }

        // Add reading question
        case readActions.ADD_DATA_READ:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case readActions.ADD_DATA_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case readActions.ADD_DATA_READ_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        
        // Edit reading question
        case readActions.EDIT_READ:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case readActions.EDIT_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case readActions.EDIT_READ_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }

        // Delete reading question
        case readActions.DELETE_READ:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case readActions.DELETE_READ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case readActions.DELETE_READ_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case readActions.NEW_GAME:
            return {
                ...state,
                newGame: !state.newGame
            }
        case readActions.FETCH_QUESTION_QUIZ:
            return {
                ...state,
                loading: true,
                success: false,
                quizQuestion: null
            }
        case readActions.FETCH_QUESTION_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                quizQuestion: action.payload
            }
        case readActions.FETCH_QUESTION_QUIZ_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                quizQuestion: null
            }
        case readActions.POST_QUESTION_QUIZ:
            return {
                ...state,
                loading: true,
                success: true,
                quizQuestion: action.payload
            }
        case readActions.POST_QUESTION_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case readActions.GET_QUESTION_QUIZ_USER:
            return {
                ...state,
                loading: true,
                success: false,
                dataQuizUser: [],
            }
        case readActions.GET_QUESTION_QUIZ_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                dataQuizUser: action.payload,
                }
        default: 
            return state;
    }

}