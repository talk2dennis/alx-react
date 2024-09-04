import { Map } from 'immutable';
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
  } from '../actions/uiActionTypes';
  
  const initialState = Map({
    user: { isLoggedIn: false },
    isNotificationDrawerVisible: false,
    isUserLoggedIn: false,
  });
  
  
  const uiReducer = (state = initialState, action) => {
    switch (action.type) {
      case DISPLAY_NOTIFICATION_DRAWER:
        return state.set('isNotificationDrawerVisible', true);
  
      case HIDE_NOTIFICATION_DRAWER:
        return state.set('isNotificationDrawerVisible', false);
  
      case LOGIN_SUCCESS:
        return state
        .set('user', { isLoggedIn: true, ...action.user })  // Update the user data in the state
        .set('isUserLoggedIn', true);
  
      case LOGIN_FAILURE:
        return state.set('isUserLoggedIn', false).set('user', Map({}));
  
      case LOGOUT:
        return state.set('isUserLoggedIn', false).set('user', Map({}));
  
      default:
        return state; // Ensure the default case returns the current state
    }
  };
  
  export default uiReducer;
  