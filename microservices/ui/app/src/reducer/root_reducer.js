import { combineReducers } from 'redux'; 
import scenarioReducer from './scenario_reducer';
import userReducer from './user_reducer'; 
import gameReducer from './game_reducer';

const rootReducer = combineReducers({
    scenarios: scenarioReducer,
    user: userReducer,
    game: gameReducer
}); 

export default rootReducer;

