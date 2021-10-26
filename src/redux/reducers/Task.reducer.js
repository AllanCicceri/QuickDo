import ActionTypes from "../actions/ActionTypes";
import api from "../../api/api";

function TaskReducer(state=null, actions){
    switch (actions.type) {

        case ActionTypes.task.all:
            // api.addTask(actions.payload.project, actions.payload.task)
            return actions.payload.task
    
        default:
            return state;
    }
}

export default TaskReducer