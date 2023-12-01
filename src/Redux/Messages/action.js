import { BASE_YYTAPI } from "../../Config/API"
import { CREATE_NEW_MESSAGES, GET_ALL_MESSAGES } from "./actionTypes";

export const createMsg = (msgData) => async(dispatch) => {
    try {
        const resData = await fetch(`${BASE_YYTAPI}/api/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${msgData.token}`
            },
            body: JSON.stringify(msgData.data)
        });

        const data = await resData.json();
        dispatch({type: CREATE_NEW_MESSAGES, payload: data});


    } catch (error) {
        console.error('error: ', error)
        
    }
}

export const getAllMsg = (reqData) => async(dispatch) => {
    try {
        const response = await fetch(`${BASE_YYTAPI}/api/chat/${reqData.chatID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${reqData.token}`
            },
            body: JSON.stringify(reqData.data)
        });

        const data = await response.json();
        dispatch({type: GET_ALL_MESSAGES, payload: data});


    } catch (error) {
        console.error('error: ', error)
        
    }
}