import ActionTypes from './ActionTypes'

const UserActions = {
    userLogin(user){
        return {
            type: ActionTypes.user.login,
            payload: user,
        }
    },

    userLogout(){
        return {
            type: ActionTypes.user.logout,
        }
    }

}


export default UserActions