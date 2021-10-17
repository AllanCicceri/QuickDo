import { combineReducers, createStore } from "redux";
import UserReducer from './reducers/User.reducer'
import ProjectReducer from './reducers/Project.reducer'
import ActiveProjectReducer from "./reducers/ActiveProject.reducer";

const rootReducer = combineReducers({
    user: UserReducer,
    project: ProjectReducer,
    activeProject: ActiveProjectReducer
})

const store = createStore(rootReducer)

export default store