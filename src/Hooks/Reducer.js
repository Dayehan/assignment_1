import { useReducer } from "react"
import { GAME_STATE, REDUCER_HOOK } from "./utils"

//DISPATCH
export const changeMaximumRound = (newMaximumRound) => ({
    type: REDUCER_HOOK.CHANGE_MAXIMUM_ROUND,
    payload: newMaximumRound,
}) 

export const changeGameLevel = (newGameLevel) => ({
    type: REDUCER_HOOK.CHANGE_GAME_LEVEL,
    payload: newGameLevel
})

export const changeGameState = (newGameState) => ({
    type: REDUCER_HOOK.CHANGE_GAME_STATE,
    payload: newGameState
})

//SETTER

const setMaximumRound = (state, newMaximumRound) => ({
    ...state,
    maximumRound: newMaximumRound
})

const setGameLevel = (state, newGameLevel) => ({
    ...state,
    gameLevel: newGameLevel
})

const setGameState = (state, newGameState) => ({
    ...state,
    gameState: newGameState
})

// INITIAL STATE 
export const initialState = () => ({
    maximumRound: '',   
    gameLevel: 1,
    gameState: GAME_STATE.START_GAME
})


//SWITCH ACTION 

export const reducer = (state, action) => {
    switch (action.type) {
        case REDUCER_HOOK.CHANGE_MAXIMUM_ROUND:
            return setMaximumRound(state, action.payload);
        case REDUCER_HOOK.CHANGE_GAME_LEVEL:
            return setGameLevel(state, action.payload);
        case REDUCER_HOOK.CHANGE_GAME_STATE:
            return setGameState(state, action.payload);
        default:
                throw new Error("Invalid");
     }
}



