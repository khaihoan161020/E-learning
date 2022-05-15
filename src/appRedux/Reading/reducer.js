import readActions from "./action";

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    read: null
}
export default function readReducer(state = initState, action) { 
    switch (action.type) {
        // // Show modal
        // case vocabActions.TOGGLE_MODAL:
        //     return {
        //         ...state,
        //         visibleModal: !state.visibleModal,
        //         vocab: action.payload,
        //         success: false
        //     }

        // Fetch data
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

        // // Add vocab
        // case vocabActions.ADD_DATA_VOCAB:
        //     return {
        //         ...state,
        //         loading: true,
        //         success: false,
        //     }
        // case vocabActions.ADD_DATA_VOCAB_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: true,
        //     }
        // case vocabActions.ADD_DATA_VOCAB_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: false,
        //     }
        
        // // Edit vocab
        // case vocabActions.EDIT_VOCAB:
        //     return {
        //         ...state,
        //         loading: true,
        //         success: false,
        //     }
        // case vocabActions.EDIT_VOCAB_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: true,
        //     }
        // case vocabActions.EDIT_VOCAB_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: false,
        //     }

        // // Delete vocab
        // case vocabActions.DELETE_VOCAB:
        //     return {
        //         ...state,
        //         loading: true,
        //         success: false,
        //     }
        // case vocabActions.DELETE_VOCAB_SUCCESS:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: true,
        //     }
        // case vocabActions.DELETE_VOCAB_FAILURE:
        //     return {
        //         ...state,
        //         loading: false,
        //         success: false,
        //     }
        
        default: 
            return state;
    }

}