import {apiClient, apiConfig} from "../../data/services/apiClient"
import {ActionTypes} from "../constants/actionTypes"

export const getTv = (page, search = "", reset = false) => async (dispatch) => {
    if(reset){
        dispatch({
            type: ActionTypes.SET_TV_LOADING,
            payload: {loading: true},
        })
    }
    let url = "discover/tv?"
    if(search.length > 0){
        url = `search/tv?query=${search}&`
    }
    const response = await apiClient.get(`${url}api_key=${apiConfig.apiKey}&language=id&page=${page}`)
    dispatch({
        type: ActionTypes.GET_TV,
        payload: {
            response: response,
            reset: reset,
        },
    })
}