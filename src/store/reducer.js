import {combineReducers} from 'redux-immutable'
import {headerReducer} from '../common/header/store';
import {homeReducer} from '../pages/home/store';
import {detailReducer} from '../pages/detail/store';
import {loginReducer} from '../pages/login/store';
import {registerReducer} from '../pages/register/store';

export default combineReducers ({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer,
    register: registerReducer,
})

