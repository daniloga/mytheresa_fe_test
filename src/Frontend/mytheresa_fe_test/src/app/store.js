import { applyMiddleware, createStore} from 'redux';
import movieReducer from '../services/movie.reducer'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

const loggerMiddleware = createLogger()

// const rootReducer = combineReducers({
//   movieReducer: movieReducer
// })

const store = createStore(
  movieReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)

export default store
