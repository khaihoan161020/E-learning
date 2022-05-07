import userActions from './actions'

const initState = {
    data: [],
    loading: false,
    success: false,
    visibleModal: false
}
export default function vendorsReducer(state = initState, action) { 
    switch (action.type) {
        case userActions.TOGGLE_MODAL:
            return {
                ...state,
                visibleModal: !state.visibleModal
            }
        case userActions.FETCH_DATA_USER:
            return {
                ...state,
                loading: true,
                success: false,
                data: [],
            }
        case userActions.FETCH_DATA_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                data: action.payload,
                }
        case userActions.FETCH_DATA_USER_FAILURE:
            return {
                ...state,
                loading: false,
            }
        default: 
            return state;
    }

}