const DOCUMENT = "AUTH_";
const authAction = {
    LOGIN_USER: DOCUMENT + "LOGIN_USER",
    LOGIN_USER_SUCCESS: DOCUMENT + "LOGIN_USER_SUCCESS",
    LOGIN_USER_FAILURE: DOCUMENT + "LOGIN_USER_FAILURE",

    LOGOUT_USER: DOCUMENT + "LOGOUT_USER",
    
    CHECK_TOKEN: DOCUMENT + "CHECK_TOKEN", 
    CHECK_TOKEN_SUCCESS: DOCUMENT + "CHECK_TOKEN_SUCCESS", 
    CHECK_TOKEN_FAILURE: DOCUMENT + "CHECK_TOKEN_FAILURE", 
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
    },
    checkToken: () => {
        return ({
            type: authAction.CHECK_TOKEN
        })
    }
}
export default authAction;