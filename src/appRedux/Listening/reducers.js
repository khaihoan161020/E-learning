import listeningActions from './actions'

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    itemEdit: null
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
        default: 
            return state;
    }

}