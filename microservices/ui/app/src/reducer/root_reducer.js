import { combineReducers } from 'redux'; 
import scenarioReducer from './scenario_reducer';

const rootReducer = combineReducers({
    scenarios: scenarioReducer
}); 

export default rootReducer;