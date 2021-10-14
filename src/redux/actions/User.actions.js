import ActionTypes from './User.actiontypes'

const UserActions = {
    userLogin(user){
        return {
            type: ActionTypes.login,
            payload: user,
        }
    },

    userLogout(){
        return {
            type: ActionTypes.logout,
        }
    }

}


export default UserActions