import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    movies: [],
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_MOVIES:
            return {...state, response: payload}
        default:
            return state
    }
}