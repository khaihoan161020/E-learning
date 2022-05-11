import userActions from './actions'

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false,
    user: null
}
export default function vendorsReducer(state = initState, action) { 
    switch (action.type) {
        case userActions.TOGGLE_MODAL:
            return {
                ...state,
                visibleModal: !state.visibleModal,
                user: action.payload,
                success: false
            }
        case userActions.FETCH_DATA_USER:
            return {
                ...state,
                loading: true,
                data: [],
            }
        case userActions.FETCH_DATA_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                }
        case userActions.FETCH_DATA_USER_FAILURE:
            return {
                ...state,
                loading: false,
            }

        case userActions.ADD_DATA_USER:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case userActions.ADD_DATA_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case userActions.ADD_DATA_USER_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case userActions.EDIT_USER:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case userActions.EDIT_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case userActions.EDIT_USER_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        case userActions.DELETE_USER:
            return {
                ...state,
                loading: true,
                success: false,
            }
        case userActions.DELETE_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
            }
        case userActions.DELETE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
            }
        default: 
            return state;
    }

}