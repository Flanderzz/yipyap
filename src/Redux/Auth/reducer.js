import { LOGIN, REGISTER, REQ_USER, SEARCH_USER, UPDATE_USER } from "./actionTypes"

const initialValue = {
    signup:null,
    signin:null,
    reqUser: null,
    searchUser: {},
    updatedUser: null

}

export const authReducer = (store=initialValue, {type, payload}) => {
    switch (type) {
        case REGISTER:
            return {...store,signup:payload}
        case LOGIN:
            return {...store,signin:payload}
        case REQ_USER:
            return {...store,reqUser:payload}
        case SEARCH_USER:
            return {...store,searchUser:payload}
        case UPDATE_USER:
            return {...store,updatedUser:payload}
        default:
            return store
    }
}