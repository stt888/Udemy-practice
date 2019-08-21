import axios from 'axios';
import {fromJS} from 'immutable';
import * as actionType from './actionType';

const changHomeData = (res) => ({
        type: actionType.CHANGE_HOME_DATA,
        topicList: res.topicList,
        list: res.list,
        instructorList: res.instructorList
});

const addHomeData = (list, nextPage) => ({
    type: actionType.ADD_HOME_DATA,    
    list: fromJS(list),
    nextPage
});

export const getHomeInfo = () => {
    return dispatch => {
        axios.get('/api/homeList.json')
            .then((response) => {
                const res = response.data.data;
                dispatch(changHomeData(res));
            })
            .catch(error => console.log(error.message))
    }
}    

export const getMoreList = (page) => {
    return dispatch => {
        axios.get('/api/addHomeList.json?page='+page)
            .then((res) => {
                const list = res.data.data;
                console.log(list);
                dispatch(addHomeData(list, page+1));
            })
            .catch(error => console.log(error.message))
    }
}

export const changeScrollTop = (show) => ({
    type: actionType.TOGGLE_SCROLL_TOP,
    show
})