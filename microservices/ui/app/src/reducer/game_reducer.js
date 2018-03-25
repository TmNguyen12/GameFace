import { RECEIVE_GAME } from '../actions/game_actions';

const dummyState = { 
    1: {
        complete: true, 
        gameMaster:  1, 
        player2: 2,
        player3: 3, 
        player4: 4,
        player5: 5
    }
};
const gameReducer = (state = dummyState, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_GAME: 
            return action.game;
        default: 
            return state; 
    }
}; 

export default gameReducer;