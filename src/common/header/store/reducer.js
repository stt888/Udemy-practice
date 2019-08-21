import {SEARCH_FOCUS, SEARCH_BLUR, CHANGE_DATA, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE} from './actionTypes';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseEnter: false,
    list: [],
    page: 1,
    totalPage: 1
});

export default (state=defaultState, action) => {
    if(action.type===SEARCH_FOCUS){
        return state.set('focused', true);
    }
    if(action.type===SEARCH_BLUR){
       return state.set('focused', false);
    }
    if(action.type===CHANGE_DATA){
        // return state.set('list', action.data).set('totalPage', action.totalPage);
        return state.merge({
            list: action.data,
            totalPage: action.totalPage
    });
    }
    if(action.type===MOUSE_ENTER){
        return state.set('mouseEnter', true);
    }
    if(action.type===MOUSE_LEAVE){
        return state.set('mouseEnter', false);
    }
    if(action.type===CHANGE_PAGE){        
        return state.set('page', action.page);        
    }

    return state;
};