import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    movies: [],
    page: 1,
    maxPage: -1,
    scrollPosition: 0,
    loading: false,
}

export const movieReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_MOVIES:
            return {
                ...state, 
                movies: payload.reset ? payload.response.data.results : [...state.movies, ...payload.response.data.results],
                page: payload.response.data.page,
                maxPage: payload.response.data.total_pages,
                loading: false,
            }
        case ActionTypes.SET_LOADING:
            return {
                ...state,
                loading: payload.loading,
            }        
        default:
            return state
    }
}