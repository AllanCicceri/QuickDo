import ActionTypes from "./ActionTypes";

const ProjectActions = {
    selectProject(project){
        return{
            type: ActionTypes.project.active,
            payload: project
        }
    },

    getAllProjects(projects){
        return{
            type: ActionTypes.project.all,
            payload: projects
        }
    }
}

export default ProjectActions