import {apiClient, apiConfig} from "../../data/services/apiClient"
import {ActionTypes} from "../constants/actionTypes"
import realmClient from '../../data/database/realmClient';

export const getMovies = (page, reset = false) => async (dispatch) => {
    if(reset){
        dispatch({
            type: ActionTypes.SET_MOVIE_LOADING,
            payload: {loading: true},
        })
    }
    await apiClient
        .get(`discover/movie?api_key=${apiConfig.apiKey}&language=id&page=${page}`)
        .then((response: AxiosResponse) => {
            try {
                realmClient.write(() => {
                    response.data.results.forEach(obj => {
                        realmClient.create("Movies",obj, true)                                                                        
                    });
                })
            } catch(e) {
                console.error(e.message);
            }
            
            dispatch({
                type: ActionTypes.GET_MOVIES,
                payload: {
                    response: response,
                    reset: reset,
                },
            })
        })
        .catch((reason: AxiosError) => {
            if (reason.response?.status === 400) {
                const movies = realmClient.objects("Movies");
                dispatch({
                    type: ActionTypes.GET_LOCAL_MOVIES,
                    payload: movies,
                })
            }
        })
}

export const getDetailMovies = (id) => async (dispatch) => {
    dispatch({
        type: ActionTypes.SET_DETAIL_LOADING,
        payload: {loadingDetail: true},
    })
    const response = await apiClient.get(`movie/${id}?api_key=${apiConfig.apiKey}&language=id`)
    dispatch({
        type: ActionTypes.GET_DETAIL_MOVIE,
        payload: response,
    })
}

export const getSimilarMovies = (id) => async (dispatch) => {
    const response = await apiClient.get(`movie/${id}/similar?api_key=${apiConfig.apiKey}&language=id`) 
    dispatch({
        type: ActionTypes.GET_SIMILAR_MOVIES,
        payload: {
            id: id,
            response: response,
        },
    })
}