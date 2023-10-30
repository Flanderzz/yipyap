import { CREATE_CHAT, CREATE_GROUP_CHAT, GET_ALL_CHATS } from "./actionTypes";

const initialValue = {
    chat: [],
    groupChat: null,
    getAll: null
}

export const chatReducer = (store=initialValue, {type, payload}) => {
    switch (type) {
        case CREATE_CHAT:
            return {...store,chat:payload}
        case CREATE_GROUP_CHAT:
            return {...store,groupChat:payload}
        case GET_ALL_CHATS:
            return {...store,getAll:payload}
        default:
            return store
    }
}