import ActionTypes from "./ActionTypes";

const ProjectActions = {
    getAllProjects(projects){
        return{
            type: ActionTypes.project.all,
            payload: projects
        }
    }
}

export default ProjectActions