import ActionTypes from './User.actiontypes'

function createUser(){
    return {
        type: ActionTypes.insert,
        payload: []
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