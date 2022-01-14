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
        case ActionTypes.SET_TV_LOADING:
            return {
                ...state,
                loading: payload.loading,
            }   
        default:
            return state
    }
}