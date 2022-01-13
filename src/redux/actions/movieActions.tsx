import {apiClient, apiConfig} from "../../services/apiClient"
import {ActionTypes} from "../constants/actionTypes"

export const getMovies = async (page) => async (dispatch) => {
    const response = await apiClient.get(`discover/movie?api_key=${apiConfig.apiKey}&language=id&page=${page}`)
    dispatch({
        type: ActionTypes.GET_MOVIES,
        payload: response,
    })
}