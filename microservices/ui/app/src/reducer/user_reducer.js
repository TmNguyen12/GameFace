import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions.js'; 

const dummyState = { 

};
const userReducer = (state = {}, action) => {
    Object.freeze(state); 
    switch(action.type) { 
        case RECEIVE_USER: 
            return action.user; 
        default: 
            return state; 
    }
}; 

export default userReducer; 

