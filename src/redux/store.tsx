import { createStore, combineReducers } from 'redux'
import { movieReducer } from './reducers/movieReducer'

const rootReducer = combineReducers(
  { movie: movieReducer }
)

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;