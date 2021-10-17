import ActionTypes from "../actions/ActionTypes";

function ActiveProjectReducer(state=null, actions){
    switch (actions.type) {
        case ActionTypes.project.active:
            return {...actions.payload};

        default:
            return state;
    }
}

export default ActiveProjectReducer