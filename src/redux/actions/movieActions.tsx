import {apiClient, apiConfig} from "../../data/services/apiClient"
import {ActionTypes} from "../constants/actionTypes"

export const getMovies = (page, reset = false) => async (dispatch) => {
    if(reset){
        dispatch({
            type: ActionTypes.SET_LOADING,
            payload: {loading: true},
        })
    }
    const response = await apiClient.get(`discover/movie?api_key=${apiConfig.apiKey}&language=id&page=${page}`)
    dispatch({
        type: ActionTypes.GET_MOVIES,
        payload: {
            response: response,
            reset: reset,
        },
    })
}