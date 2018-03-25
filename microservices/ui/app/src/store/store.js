import { createStore } from 'redux';
import rootReducer from '../reducer/root_reducer';

const configureStore = () => {
    return createStore(rootReducer); 
}; 

export default configureStore;
