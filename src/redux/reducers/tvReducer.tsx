import { ActionTypes } from "../constants/actionTypes"

const initialState = {
    tvs: [],
    stories: [],
    page: 1,
    maxPage: -1,
    loading: false,
}

export const tvReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ActionTypes.GET_TV:
            return {
                ...state, 
                tvs: payload.reset ? payload.response.data.results : [...state.tvs, ...payload.response.data.results],
                page: payload.response.data.page,
                maxPage: payload.response.data.total_pages,
                loading: false,
            }
        case ActionTypes.GET_LOCAL_TV:
            return {
                ...state, 
                tvs: payload,
                page: 1,
                maxPage: -1,
                loading: false,
            }
        case ActionTypes.GET_STORY:
            return {
                ...state, 
                stories: payload.data.results,
            }
        case ActionTypes.GET_LOCAL_STORY:
            return {
                ...state, 
                stories: payload,
            }
        case ActionTypes.SET_TV_LOADING:
            return {
                ...state,
                loading: payload.loading,
            }   
        default:
            return state
    }
}