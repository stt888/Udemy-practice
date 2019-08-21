import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (title, content) => ({
    type: actionTypes.CHANGE_DETAIL,
    title,
    content
})

export const getDetail = (pathId) => {
    return dispatch => {
        axios.get('/api/detailData.json?id='+pathId)
            .then((res) => {
                const result = res.data.data;
                console.log(result);
                dispatch(changeDetail(result.title, result.content));
            })
            .catch(error => console.log(error.message))
    }
}