import ActionTypes from '../actions/ActionTypes'

function UserReducer(state=null, actions){
    
    switch (actions.type) {
        case ActionTypes.USER_LOGIN:
            return actions.userLogin
            
        case ActionTypes.USER_LOGOUT:
            return null
        
        default:
            return state;
    }
}

export default UserReducer