import {USER_LOGIN} from '../actions/login';
import { USERS } from '../../data/dummy-data';

const initialState = {
    users : USERS,
    loggedInUser: {}
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return{
                ...state,
                loggedInUser: action.user
            }
        default:
            return state;
    }
    return state;
}

export default userReducer;