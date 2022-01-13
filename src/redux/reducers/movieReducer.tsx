import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    movies: [],
    page: 1,
    maxPage: -1,
    scrollPosition: 0,
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_MOVIES:
            return {
                ...state, 
                movies: [...state.movies, ...payload.data.results],
                page: payload.data.page,
                maxPage: payload.data.total_pages,
            }
        default:
            return state
    }
}