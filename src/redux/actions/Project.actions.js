import ActionTypes from "./ActionTypes";

const ProjectActions = {
    getAllProjects(projects){
        return{
            type: ActionTypes.project.all,
            payload: projects
        }
    },

    addPoject(projects){
        return{
            type: ActionTypes.project.add,
            payload: projects
        }
    }
}

export default ProjectActions