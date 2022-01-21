import {apiClient, apiConfig} from "../../data/services/apiClient"
import {ActionTypes} from "../constants/actionTypes"
import realmClient from '../../data/database/realmClient';

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
    await apiClient
        .get(`${url}api_key=${apiConfig.apiKey}&language=id&page=${page}`)
        .then((response: AxiosResponse) => {
            try {
                realmClient.write(() => {
                    response.data.results.forEach(obj => {
                        realmClient.create("Tvs",obj, true)                                                                        
                    });
                })
            } catch(e) {
                console.error(e.message);
            }
            dispatch({
                type: ActionTypes.GET_TV,
                payload: {
                    response: response,
                    reset: reset,
                },
            })
        })
        .catch((reason: AxiosError) => {
            const tvs = realm.objects("Tvs");
            dispatch({
                type: ActionTypes.GET_LOCAL_TV,
                payload: tvs,
            })
        })
}

export const getStory = () => async (dispatch) => {
    await apiClient
        .get(`discover/tv?api_key=${apiConfig.apiKey}&language=id&page=1`)
        .then((response: AxiosResponse) => {
            try {
                realmClient.write(() => {
                    response.data.results.forEach(obj => {
                        realmClient.create("Tvs",obj, true)                                                                        
                    });
                })
            } catch(e) {
                console.error(e.message);
            }
            
            dispatch({
                type: ActionTypes.GET_STORY,
                payload: response,
            })
        })
        .catch((reason: AxiosError) => {
            const stories = realm.objects("Tvs");
            dispatch({
                type: ActionTypes.GET_LOCAL_STORY,
                payload: stories,
            })
        })
}