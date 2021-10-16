import ActionTypes from "./ActionTypes";

const ProjectActions = {
    selectProject(project){
        return{
            type: ActionTypes.project.active,
            payload: project
        }
    }
}

export default ProjectActions