import merge from 'lodash/merge';
import { RECEIVE_USERS } from '../actions/user_actions.js'; 

const dummyState = { 

};
const userReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) { 
        case RECEIVE_USERS: 
            return action.users; 
        default: 
            return state; 
    }
}; 

export default userReducer; 

