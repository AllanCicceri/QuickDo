import ActionTypes from "../actions/ActionTypes";

const initialState = {
    allTasks: [],
}

function TaskReducer(state=initialState, actions){
    switch (actions.type) {

        case ActionTypes.SET_PROJECT_TASKS:
            return {...state, allTasks: actions.projectTasks}
        case ActionTypes.ADD_TASK:
            return {...state, allTasks: state.allTasks.concat(actions.newTask)}
    
        default:
            return state;
    }
}

export default TaskReducer