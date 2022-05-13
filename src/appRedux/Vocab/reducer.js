import vocabActions from "./action";

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    vocab: null
}
export default function vocabReducer(state = initState, action) { 
    switch (action.type) {
        // case userActions.TOGGLE_MODAL:
        //     return {
        //         ...state,
        //         visibleModal: !state.visibleModal,
        //         user: action.payload,
        //         success: false
        //     }
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
        
        // case userActions.EDIT_USER:
        //     return {
        //         ...state,
        //         loading: true,
        //         success: false,
        //     }
        // case userActions.EDIT_USER_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: true,
        //     }
        // case userActions.EDIT_USER_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: false,
        //     }
        // case userActions.DELETE_USER:
        //     return {
        //         ...state,
        //         loading: true,
        //         success: false,
        //     }
        // case userActions.DELETE_USER_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: true,
        //     }
        // case userActions.DELETE_USER_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: false,
        //     }
        default: 
            return state;
    }

}