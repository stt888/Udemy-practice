import * as actionTypes from './actionTypes';

export const changeLogin = (loginStatus) => ({
    type: actionTypes.CHANGE_LOGIN,
    loginStatus: !loginStatus
})