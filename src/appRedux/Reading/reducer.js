import readActions from "./action";

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    itemEdit: null
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
        
        default: 
            return state;
    }

}