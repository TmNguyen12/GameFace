import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_USERS } from '../actions/user_actions.js'; 

const dummyState = { 
    1: { id: 1, 
        user_name: "joeyD",
        display_name: "joey"
    }, 
    2: { id: 2, 
        user_name: "christineS",
        display_name: "christine"
    }, 
    3: { id: 3, 
        user_name: "annaO",
        display_name: "anna"
    }, 
    4: { id: 4, 
        user_name: "edanL",
        display_name: "edan"
    }, 
    5: { id: 5, 
        user_name: "truongN",
        display_name: "truong"
    }
};
const userReducer = (state = dummyState, action) => {
    Object.freeze(state); 
    switch(action.type) { 
        case RECEIVE_USER: 
            // let nextState = merge({}, state); 
            // nextState[action.user.id] = action.user; 
            return dummyState;
        case RECEIVE_USERS: 
            return action.users; 
        default: 
            return state; 
    }
}; 

export default userReducer; 

