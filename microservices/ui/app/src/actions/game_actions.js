// receive game 

export const RECEIVE_GAME = "RECEIVE_GAME"; 


export const receiveGame = game => ({
    type: RECEIVE_GAME, 
    game
});