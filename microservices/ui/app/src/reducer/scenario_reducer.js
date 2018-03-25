import merge from 'lodash/merge'; 
import { RECEIVE_SCENARIOS } from "../actions/scenario_actions";

const dummyState = { 
    1: { 
        text: "it snowed 18 million feet", 
        emotion: "disgust"
    },
    2: {
        text: "your dog died", 
        emotion: "sadness"
    }
};

const scenarioReducer = (state = dummyState, action) => {
    Object.freeze(state); 
    switch(action.type) { 
        case RECEIVE_SCENARIOS: 
            return action.scenarios; 
        default: 
            return state; 
    }
}; 

export default scenarioReducer; 