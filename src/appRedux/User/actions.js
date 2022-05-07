const DOCUMENT = "USER_";
const userActions = {
    TOGGLE_MODAL: DOCUMENT + "TOGGLE_MODAL",

    FETCH_DATA_USER: DOCUMENT + "FETCH_DATA_USER",
    FETCH_DATA_USER_SUCCESS: DOCUMENT + "FETCH_DATA_USER_SUCCESS",
    FETCH_DATA_USER_FAILURE: DOCUMENT + "FETCH_DATA_USER_FAILURE",
    toggleModal: () => {
        return ({
            type: userActions.TOGGLE_MODAL
        })
    },
    fetchUser: (data) => {
        return ({
            type: userActions.FETCH_DATA_USER,
            payload: data
        })
    }
}
export default userActions;