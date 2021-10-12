import ActionTypes from '../actions/User.actiontypes'

function UserReducer(state=null, actions){
    switch (actions.type) {
        case ActionTypes.insert:
            return {name: actions.payload[0], email: actions.payload[1], avatar: actions.payload[2] }
            
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