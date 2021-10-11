import { combineReducers, createStore } from "redux";
import UserReducer from './reducers/User.reducer'

const rootReducer = combineReducers({
    user: UserReducer
})

const store = createStore(rootReducer)

export default store