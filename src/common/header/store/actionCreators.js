//import {SEARCH_FOCUS, SEARCH_BLUR} from './actionTypes';
import axios from 'axios';
import {fromJS} from 'immutable';
import {actionTypes}  from './index';

export const searchFocus = () => ({
    type: actionTypes.SEARCH_FOCUS,
});

export const searchBlur = () => ({
    type: actionTypes.SEARCH_BLUR,
});

export const changeList = (data) => ({
    type: actionTypes.CHANGE_DATA,
    data: fromJS(data),
    totalPage: Math.ceil(data.length/10)
})
export const getList = () => {
    return dispatch => {
        axios.get('/api/headerList.json')
        .then(res=>{dispatch(changeList(res.data.data))})
        .catch(error => console.log(error.message))
    }
}

export const mouseEnter = () =>({
    type: actionTypes.MOUSE_ENTER,
})
export const mouseLeave = () =>({
    type: actionTypes.MOUSE_LEAVE,
})

export const changePage = (page) => ({
    type: actionTypes.CHANGE_PAGE,
    page
})
