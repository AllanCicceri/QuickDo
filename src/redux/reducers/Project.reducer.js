import { act } from "react-dom/test-utils";
import ActionTypes from "../actions/ActionTypes";

function ProjectReducer(state=null, actions){
    switch (actions.type) {

        case ActionTypes.project.all:
            return [...actions.payload]
    
        default:
            return state;
    }
}

export default ProjectReducer