import ActionTypes from '../actions/User.actiontypes'

function UserReducer(state=null, actions){
    switch (actions.type) {
        case ActionTypes.insert:
            return {name: actions.payload.name, email: actions.payload.email, avatar: actions.payload.avatar }
            
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