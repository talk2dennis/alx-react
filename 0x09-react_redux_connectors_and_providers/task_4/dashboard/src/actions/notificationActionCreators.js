import { bindActionCreators } from 'redux';
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_TYPE_FILTER, SET_LOADING_STATE } from "./notificationActionTypes";


export const markAsAread = (index) => {
    return {
        type: MARK_AS_READ,
        index,
    };
};

export const setNotificationFilter = (filter) => {
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};

export const fetchNotificationsSuccess = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data,
    };
}

export const setLoadingState = (loading) => {
    return {
        type: SET_LOADING_STATE,
        loading,
    };
}

export const setNotifications = (data) => {
    return {
        type: FETCH_NOTIFICATIONS_SUCCESS,
        data,
    };
}

export const fetchNotifications = () => {
    return async (dispatch) => {
        dispatch(setLoadingState(true));
        const response = await fetch('/notifications');
        const data = await response.json();
        dispatch(setNotifications(data));
        dispatch(setLoadingState(false));
    };
};

// Bound action creators
export const boundMarkAsRead = (dispatch) => bindActionCreators(markAsRead, dispatch);
export const boundSetNotificationFilter = (dispatch) => bindActionCreators(setNotificationFilter, dispatch);
