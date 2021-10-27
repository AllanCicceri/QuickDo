import ActionTypes from "../actions/ActionTypes";

function ActiveTasksReducer(state=null, actions){
    switch (actions.type) {
        case ActionTypes.task.all:
            return {...actions.payload};

        default:
            return state;
    }
}

export default ActiveTasksReducer