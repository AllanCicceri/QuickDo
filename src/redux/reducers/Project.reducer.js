import ActionTypes from "../actions/ActionTypes";

function ProjectReducer(state=null, actions){
    switch (actions.type) {
        case ActionTypes.project.active:
            console.log('colou aqui2')
            return {...actions.payload};
    
        default:
            return state;
    }
}

export default ProjectReducer