import {fromJS} from 'immutable';
import rec1 from '../../../static/rec1.png';
import rec2 from '../../../static/rec2.png';
import rec3 from '../../../static/rec3.png';
import rec4 from '../../../static/rec4.png';
import * as actionType from './actionType';


const defaultState = fromJS({
    topicList: [],
    list: [],
    recList: [{id: 1, imgUrl: rec1}, {id: 2, imgUrl: rec2}, {id: 3, imgUrl: rec3}, {id: 4, imgUrl: rec4}],
    instructorList: [],
    listPage: 1,
    showScroll: false
});

export default (state=defaultState, action) => {
    switch(action.type){
        case actionType.CHANGE_HOME_DATA:
            return state.merge({
                topicList: fromJS(action.topicList),
                list: fromJS(action.list),
                instructorList: fromJS(action.instructorList),
            });
        case actionType.ADD_HOME_DATA:
            return state.merge({
                list: state.get('list').concat(action.list),
                listPage: action.nextPage
            });
        case actionType.TOGGLE_SCROLL_TOP:
            return state.set('showScroll', action.show)
        default: 
            return state;
    }
};