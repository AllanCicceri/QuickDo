import ActionTypes from './User.actiontypes'


function createUser(user){
    return {
        type: ActionTypes.insert,
        payload: user
    }
}
function updateUser(){
    return {
        type: ActionTypes.update,
        payload: []
    }
}

function consultUser(){
    return {
        type: ActionTypes.consult,
        payload: []
    }
}

function deleteUser(){
    return {
        type: ActionTypes.delete,
        payload: []
    }
}

export  {createUser}