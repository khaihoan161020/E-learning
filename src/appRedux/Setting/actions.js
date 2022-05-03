import {SWITCH_LANGUAGE, TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from "../../constants/ActionTypes";
import {LAYOUT_TYPE, NAV_STYLE, THEME_COLOR, THEME_TYPE, UPDATE_RTL_STATUS} from "../../constants/ThemeSetting";

const DOCUMENT = "SETTING";
const settingAction = {
    SWITCH_LANGUAGE: DOCUMENT + "SWITCH_LANGUAGE",
    TOGGLE_COLLAPSED_NAV: DOCUMENT + "TOGGLE_COLLAPSED_NAV",
    WINDOW_WIDTH: DOCUMENT + "WINDOW_WIDTH",
    LAYOUT_TYPE: DOCUMENT + "LAYOUT_TYPE",
    THEME_COLOR: DOCUMENT + "THEME_COLOR",
    THEME_TYPE: DOCUMENT + "THEME_TYPE",
    UPDATE_RTL_STATUS: DOCUMENT + "UPDATE_RTL_STATUS",
    toggleCollapsedSideNav(navCollapsed) {
        return {type: TOGGLE_COLLAPSED_NAV, navCollapsed};
    },
    updateWindowWidth(width) {
        return (dispatch) => {
            dispatch({type: WINDOW_WIDTH, width});
        }
    },
    setThemeType(themeType) {
        return (dispatch) => {
          dispatch({type: THEME_TYPE, themeType});
        }
    },
    setThemeColor(themeColor) {
    return (dispatch) => {
        dispatch({type: THEME_COLOR, themeColor});
     }
    },
    onNavStyleChange(navStyle) {
        return (dispatch) => {
          dispatch({type: NAV_STYLE, navStyle});
        }
      },
      onLayoutTypeChange(layoutType) {
        return (dispatch) => {
          dispatch({type: LAYOUT_TYPE, layoutType});
        }
      },
      switchLanguage(locale) {
  return (dispatch) => {
    dispatch({
      type: SWITCH_LANGUAGE,
      payload: locale
    });
  }
}
      
}

export function toggleCollapsedSideNav(navCollapsed) {
  return {type: TOGGLE_COLLAPSED_NAV, navCollapsed};
}

export function updateWindowWidth(width) {
  return (dispatch) => {
    dispatch({type: WINDOW_WIDTH, width});
  }
}

export function setThemeType(themeType) {
  return (dispatch) => {
    dispatch({type: THEME_TYPE, themeType});
  }
}

export function setThemeColor(themeColor) {
  return (dispatch) => {
    dispatch({type: THEME_COLOR, themeColor});
  }
}

// export function setDirectionRTL(rtlStatus) {
//   return (dispatch) => {
//     dispatch({type: UPDATE_RTL_STATUS, rtlStatus});
//   }
// }

export function onNavStyleChange(navStyle) {
  return (dispatch) => {
    dispatch({type: NAV_STYLE, navStyle});
  }
}

export function onLayoutTypeChange(layoutType) {
  return (dispatch) => {
    dispatch({type: LAYOUT_TYPE, layoutType});
  }
}

export function switchLanguage(locale) {
  return (dispatch) => {
    dispatch({
      type: SWITCH_LANGUAGE,
      payload: locale
    });
  }
}
