import { combineReducers, createStore } from "redux";
import UserReducer from './reducers/User.reducer'
import ProjectReducer from './reducers/Project.reducer'
import TaskReducer from "./reducers/Task.reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    project: ProjectReducer,
    tasks: TaskReducer,
})

const store = createStore(rootReducer)

export default store