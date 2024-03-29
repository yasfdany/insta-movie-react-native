import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    movies: [],
    movieBookmarks: [],
    page: 1,
    maxPage: -1,
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
        case ActionTypes.GET_LOCAL_MOVIES:
            return {
                ...state, 
                movies: payload,
                page: 1,
                maxPage: -1,
                loading: false,
            }
        case ActionTypes.GET_DETAIL_MOVIE:
            const detailMovie = {
                ...state, 
            }
            detailMovie[`loadingDetail${payload.id}`] = false
            detailMovie[`detail${payload.id}`] = payload.data

            return detailMovie
        case ActionTypes.GET_SIMILAR_MOVIES:
            const similarMovie = {
                ...state
            }
            similarMovie[`similar${payload.id}`] = payload.response.data.results

            return similarMovie
        case ActionTypes.SET_MOVIE_LOADING:
            return {
                ...state,
                loading: payload.loading,
            }
        case ActionTypes.SET_DETAIL_LOADING:
            const loadingData = {
                ...state,
            }
            loadingData[`loadingDetail${payload.id}`] = payload[`loadingDetail${payload.id}`]
            return loadingData
        case ActionTypes.GET_MOVIE_BOOKMARK:
            return {
                ...state,
                movieBookmarks: payload,
            }    
        default:
            return state
    }
}