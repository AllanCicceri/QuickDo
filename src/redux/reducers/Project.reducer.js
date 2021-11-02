import { act } from "react-dom/test-utils";
import ActionTypes from "../actions/ActionTypes";

const initialState = {
    activeProject: null,
    allProjects: []
}

function ProjectReducer(state=initialState, actions){
    switch (actions.type) {
        case ActionTypes.SET_ACTIVE_PROJECT:
            return {...state, activeProject: actions.activeProject}

        case ActionTypes.ADD_PROJECT:
            return {...state, allProjects: state.allProjects.concat(actions.newProject)}

        case ActionTypes.SET_USER_PROJECTS:
            return {...state, allProjects: actions.userProjects}
    
        default:
            return state;
    }
}

export default ProjectReducer