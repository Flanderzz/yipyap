import { BASE_YYTAPI } from "../../Config/API";
import { CREATE_CHAT, CREATE_GROUP_CHAT, GET_ALL_CHATS } from "./actionTypes";

export const createChat = (chatData) => async(dispatch) => {
    try{
        const resData = await fetch(`${BASE_YYTAPI}/api/chats/single`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${chatData.token}`,
            },
            body:JSON.stringify(chatData.data),
        });
        const data = await resData.json();
        console.log('chat data: ', data)
        dispatch({type: CREATE_CHAT, payload: data});
    } catch (e) {
        console.log('Error:' , e);
    }
}

export const createGroupChat = (chatData) => async(dispatch) => {
    try{
        const resData = await fetch(`${BASE_YYTAPI}/api/chats/groupchat`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${chatData.token}`,
            },
            body:JSON.stringify(chatData.data),
        });

        const data = await resData.json();
        console.log('group chat data: ', data)
        dispatch({type: CREATE_GROUP_CHAT, payload: data});
    } catch (e) {
        console.log('Error:' , e);
    }
}

export const getAllChats = (chatData) => async(dispatch) => {
    try{
        const resData = await fetch(`${BASE_YYTAPI}/api/chats/user`, {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                Authorization:`Bearer ${chatData.token}`,
            },
            body:JSON.stringify(chatData.data),
        });

        const data = await resData.json();
        console.log('get all chat data: ', data)
        dispatch({type: GET_ALL_CHATS, payload: data});
    } catch (e) {
        console.log('Error:' , e);
    }
}