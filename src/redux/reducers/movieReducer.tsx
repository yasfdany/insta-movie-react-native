import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    movies: [],
    page: 1,
    maxPage: -1,
    loading: false,
    loadingDetail: false,
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
        case ActionTypes.GET_DETAIL_MOVIE:
            const data = {
                ...state, 
                loadingDetail: false,
            }
            data[`detail${payload.data.id}`] = payload.data

            return data
        case ActionTypes.SET_MOVIE_LOADING:
            return {
                ...state,
                loading: payload.loading,
            }
        case ActionTypes.SET_DETAIL_LOADING:
            return {
                ...state,
                loadingDetail: payload.loadingDetail,
            }    
        default:
            return state
    }
}