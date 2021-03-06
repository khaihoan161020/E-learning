import {
    HIDE_MESSAGE,
    INIT_URL,
    ON_HIDE_LOADER,
    ON_SHOW_LOADER,
    SHOW_MESSAGE,
  } from "../../constants/ActionTypes";
import authAction from "./actions";
  const INIT_STATE = {
    loader: false,
    alertMessage: '',
    showMessage: false,
    initURL: '',
    authUser: localStorage.getItem("token_id"),
    loading: false,
    userProfile: null,
    success: false
  };
  
  
  const AuthReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
      case authAction.LOGIN_USER: {
        return {
          ...state,
          loader: true,
        }
      }
      case authAction.LOGIN_USER_SUCCESS: {
        return {
          ...state,
          loader: false,
          userProfile: action.payload,
          authUser: action.payload.token,
          initURL: '/',
          success: true,
        }
      }
      case authAction.LOGIN_USER_FAILURE: {
        return {
          ...state,
          loader: false,
          success: false
        }
      }
      case authAction.LOGOUT_USER: {
        localStorage.removeItem("token_id");
        return {
          ...state,
          initURL: '/signin',
          userProfile: null,
          authUser: null
        }

      }
      case authAction.CHECK_TOKEN: {
        return {
          ...state
        }
      }
      case authAction.CHECK_TOKEN_SUCCESS: {
        localStorage.setItem("token_id", action.payload.token);
        return {
          ...state,
          userProfile: action.payload

        }
      }
      case authAction.CHECK_TOKEN_FAILURE: {
        return {
          ...state,
          userProfile: null,
          authUser: null
        }
      }
      // case SIGNIN_USER_SUCCESS: {
      //   return {
      //     ...state,
      //     loader: false,
      //     authUser: action.payload
      //   }
      // }
      case INIT_URL: {
        return {
          ...state,
          initURL: action.payload
        }
      }
      // case SIGNOUT_USER_SUCCESS: {
      //   return {
      //     ...state,
      //     authUser: null,
      //     initURL: '/',
      //     loader: false
      //   }
      // }
  
      case SHOW_MESSAGE: {
        return {
          ...state,
          alertMessage: action.payload,
          showMessage: true,
          loader: false
        }
      }
      case HIDE_MESSAGE: {
        return {
          ...state,
          alertMessage: '',
          showMessage: false,
          loader: false
        }
      }
  
      case ON_SHOW_LOADER: {
        return {
          ...state,
          loader: true
        }
      }
      case ON_HIDE_LOADER: {
        return {
          ...state,
          loader: false
        }
      }
      default:
        return state;
    }
  }
  
  export default AuthReducer;
  