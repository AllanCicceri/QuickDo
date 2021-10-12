import ActionTypes from './User.actiontypes'


function createUser(name, email, avatar){
    return {
        type: ActionTypes.insert,
        payload: [name, email, avatar]
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