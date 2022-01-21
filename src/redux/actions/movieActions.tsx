import {apiClient, apiConfig} from "../../data/services/apiClient"
import {ActionTypes} from "../constants/actionTypes"
import realmClient from '../../data/database/realmClient';
import { MovieBookmarkSchema, MovieBookmarkSchemaInterface } from '../../data/database/schemas/MovieBookmarkSchema';
import MovieBookmarkScreen from '../../ui/screens/movie_bookmark/MovieBookmarkScreen';

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
            const movies = realmClient.objects("Movies");
            dispatch({
                type: ActionTypes.GET_LOCAL_MOVIES,
                payload: movies,
            })
        })
}

export const getDetailMovies = (id) => async (dispatch) => {
    const payload = {
        id: id,
    }
    payload[`loadingDetail${payload.id}`] = true

    dispatch({
        type: ActionTypes.SET_DETAIL_LOADING,
        payload: payload,
    })

    await apiClient
        .get(`movie/${id}?api_key=${apiConfig.apiKey}&language=id`)
        .then((response: AxiosResponse) => {
             try {
                realmClient.write(() => {
                    realmClient.create("MovieDetails",response.data, true)
                })
            } catch(e) {
                console.error(e.message);
            }

            dispatch({
                type: ActionTypes.GET_DETAIL_MOVIE,
                payload: {id: id, data: response.data},
            })
        })
        .catch((reason: AxiosError) => {
            const detailMovie = realmClient.objectForPrimaryKey("MovieDetails", id);
            dispatch({
                type: ActionTypes.GET_DETAIL_MOVIE,
                payload: {id: id, data: detailMovie},
            })       
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

export const getMovieBookmark = () => async (dispatch) => {
    const bookmarks = realmClient.objects("MovieBookmarks");
    
    dispatch({
        type: ActionTypes.GET_MOVIE_BOOKMARK,
        payload: bookmarks,
    })
}


export const toggleMovieBookmark = (movie) => async (dispatch) => {
    const bookmarks = realmClient.objects("MovieBookmarks");
    const bookmark = bookmarks.filtered(`id = ${movie.id}`);

    try {
        realmClient.write(() => {
            if(bookmark.length > 0){
                realmClient.delete(bookmark[0]);
            } else {
                realmClient.create("MovieBookmarks",movie, true)
            }
        })

        dispatch({
            type: ActionTypes.GET_MOVIE_BOOKMARK,
            payload: bookmarks,
        })
    } catch(e) {
        console.error(e.message);
    }
}