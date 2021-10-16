import ActionTypes from '../actions/ActionTypes'

function UserReducer(state=null, actions){
    
    switch (actions.type) {
        case ActionTypes.user.login:
            return {name: actions.payload.name, email: actions.payload.email, avatar: actions.payload.avatar }
            
        case ActionTypes.user.logout:
            return null
        
        default:
            return state;
    }
}

export default UserReducer