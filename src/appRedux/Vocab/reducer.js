import vocabActions from "./action";

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    vocab: null,
    newGame: false,
    quizQuestion: null,
    dataQuizUser: [],
    quizPreviewItem: null,
}
export default function vocabReducer(state = initState, action) { 
    switch (action.type) {
        // Show modal
        case vocabActions.TOGGLE_MODAL:
            return {
                ...state,
                visibleModal: !state.visibleModal,
                vocab: action.payload,
                success: false
            }

        // Fetch data
        case vocabActions.FETCH_DATA_VOCAB:
            return {
                ...state,
                loading: true,
                data: [],
            }
        case vocabActions.FETCH_DATA_VOCAB_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                }
        case vocabActions.FETCH_DATA_VOCAB_FAILURE:
            return {
                ...state,
                loading: false,
            }

        // Add vocab
        case vocabActions.ADD_DATA_VOCAB:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case vocabActions.ADD_DATA_VOCAB_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case vocabActions.ADD_DATA_VOCAB_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        
        // Edit vocab
        case vocabActions.EDIT_VOCAB:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case vocabActions.EDIT_VOCAB_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case vocabActions.EDIT_VOCAB_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }

        // Delete vocab
        case vocabActions.DELETE_VOCAB:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case vocabActions.DELETE_VOCAB_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case vocabActions.DELETE_VOCAB_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case vocabActions.NEW_GAME:
            return {
                ...state,
                newGame: !state.newGame
            }
        case vocabActions.FETCH_QUESTION_QUIZ:
            return {
                ...state,
                loading: true,
                success: false,
                quizQuestion: null
            }
        case vocabActions.FETCH_QUESTION_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                quizQuestion: action.payload
            }
        case vocabActions.FETCH_QUESTION_QUIZ_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                quizQuestion: null
            }
        case vocabActions.POST_QUESTION_QUIZ:
            return {
                ...state,
                loading: true,
                success: true,
                quizQuestion: action.payload
            }
        case vocabActions.POST_QUESTION_QUIZ_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case vocabActions.GET_QUESTION_QUIZ_USER:
            return {
                ...state,
                loading: true,
                success: false,
                dataQuizUser: [],
            }
        case vocabActions.GET_QUESTION_QUIZ_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                dataQuizUser: action.payload,
                }
        default: 
            return state;
    }

}