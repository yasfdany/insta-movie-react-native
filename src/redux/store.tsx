import { 
  createStore, 
  combineReducers, 
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk';
import { movieReducer } from './reducers/movieReducer'
import { tvReducer } from './reducers/tvReducer'

const rootReducer = combineReducers(
  { movie: movieReducer,
    tv: tvReducer,
  }
)

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store