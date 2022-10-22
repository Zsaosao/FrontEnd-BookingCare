import actionTypes from './actionTypes';

export const userLoginSuccesss = (userInfor) => ({
    type: actionTypes.USER_LOGIN_SUCCESS,
    userInfor: userInfor,
});
export const addUserSuccess = () => ({
    type: actionTypes.ADD_USER_SUCCESS,
});

export const processLogout = () => ({
    type: actionTypes.PROCESS_LOGOUT,
});
export const userLoginFail = () => ({
    type: actionTypes.ADMIN_LOGIN_FAIL,
});
