import ActionTypes from '../actions/User.actiontypes'

function UserReducer(state=null, actions){
    switch (actions.type) {
        case ActionTypes.insert:
            
            break;
        case ActionTypes.update:
            
            break;
        case ActionTypes.consult:
            
            break;
        case ActionTypes.delete:
            
            break;
    
        default:
            return state;
    }
}

export default UserReducer