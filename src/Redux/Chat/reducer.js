import { CREATE_CHAT, CREATE_GROUP_CHAT, GET_USERS_CHATS } from "./actionTypes";

const initialValue = {
    chats: [],
    groupChat: null,
    getChats: null
}

export const chatReducer = (store=initialValue, {type, payload}) => {
    switch (type) {
        case CREATE_CHAT:
            return {...store, chats:payload};

        case CREATE_GROUP_CHAT:
            return {...store, groupChat:payload};

        case GET_USERS_CHATS:
            return {...store, getChats:payload};
        default:
            return store;
    }
}