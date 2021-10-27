import ActionTypes from "./ActionTypes";

const ActiveTasksActions = {
    activeProject(tasks){
        return{
            type: ActionTypes.tasks.all,
            payload: tasks
        }
    }
}

export default ActiveTasksActions