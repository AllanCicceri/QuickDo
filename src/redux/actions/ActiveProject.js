import ActionTypes from "./ActionTypes";

const ActiveProjectActions = {
    activeProject(projects){
        return{
            type: ActionTypes.project.active,
            payload: projects
        }
    }
}

export default ActiveProjectActions