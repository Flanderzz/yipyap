import { CREATE_NEW_MESSAGES, GET_ALL_MESSAGES } from "./actionTypes";

const initialValue = {
    createMessage: null,
    allMessages: []
}

export const messageReducer = (store=initialValue, {type, payload}) => {
    switch (type) {
        case CREATE_NEW_MESSAGES:
            return {...store,createMessage:payload}
        case GET_ALL_MESSAGES:
            return {...store,getAllMessages:payload}
        default:
            return store
    }
}