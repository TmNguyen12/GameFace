import { createStore } from 'redux';
import rootReducer from '../reducer/root_reducer';
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
const configureStore = (preloadedState = dummyState) => {
    return createStore(rootReducer, preloadedState); 
}; 

export default configureStore;
 