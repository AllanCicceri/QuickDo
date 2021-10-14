import ActionTypes from '../actions/User.actiontypes'

function UserReducer(state=null, actions){
    
    switch (actions.type) {
        case ActionTypes.login:
            return {name: actions.payload.name, email: actions.payload.email, avatar: actions.payload.avatar }
            
        case ActionTypes.logout:
            return null
        
        default:
            return state;
    }
}

export default UserReducer