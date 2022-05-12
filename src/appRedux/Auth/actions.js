const DOCUMENT = "AUTH_";
const authAction = {
    LOGIN_USER: DOCUMENT + "LOGIN_USER",
    LOGIN_USER_SUCCESS: DOCUMENT + "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE: DOCUMENT + "LOGIN_USER_FAILURE",

    LOGOUT_USER: DOCUMENT + "LOGOUT_USER",
   
    loginUser: (data) => {
        return ({
            type: authAction.LOGIN_USER,
            payload: data
        })
    },
    logoutUser: () => {
        return ({
            type: authAction.LOGOUT_USER
        })
    }
}
export default authAction;