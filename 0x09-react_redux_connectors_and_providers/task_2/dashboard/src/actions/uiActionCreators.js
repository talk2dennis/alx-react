import { bindActionCreators } from 'redux';
import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";

export const login = (email, password) => {
    return {
        type: LOGIN,
        user: { email, password },
    };
};

export const logout = () => {
    return {
        type: LOGOUT,
    };
};

export const displayNotificationDrawer = () => {
    return {
        type: DISPLAY_NOTIFICATION_DRAWER,
    };
};

export const hideNotificationDrawer = () => {
    return {
        type: HIDE_NOTIFICATION_DRAWER,
    };
};

const loginSuccess = (user) => {
    return {
        type: LOGIN_SUCCESS,
        user,
    };
};

const loginFailure = () => {
    return {
        type: LOGIN_FAILURE,
    };
}

export const loginRequest = (email, password) => {
    return async (dispatch) => {
      dispatch(login(email, password));
  
      try {
        const response = await fetch('/login-success.json', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        dispatch(loginSuccess(data));
      } catch (error) {
        console.error('Login failed:', error);
        dispatch(loginFailure());
      }
    };
  };

// Bound action creators
export const boundLogin = (dispatch) => bindActionCreators(login, dispatch);
export const boundLogout = (dispatch) => bindActionCreators(logout, dispatch);
export const boundDisplayNotificationDrawer = (dispatch) => bindActionCreators(displayNotificationDrawer, dispatch);
export const boundHideNotificationDrawer = (dispatch) => bindActionCreators(hideNotificationDrawer, dispatch);
