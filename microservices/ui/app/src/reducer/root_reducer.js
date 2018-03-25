import { combineReducers } from 'redux'; 
import scenarioReducer from './scenario_reducer';
import userReducer from './user_reducer'; 

const rootReducer = combineReducers({
    scenarios: scenarioReducer,
    users: userReducer
}); 

export default rootReducer;

