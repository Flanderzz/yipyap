import { BASE_YYTAPI } from "../../Config/API";
import { LOGIN, REQ_USER, REGISTER, SEARCH_USER, UPDATE_USER, LOGOUT } from "./actionTypes";

export const register = (data) => async(dispatch) => {
    try {
        const response = await fetch(`${BASE_YYTAPI}/auth/signup`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();

        if(responseData.jwt){localStorage.setItem("token", responseData.jwt);}

        console.log('User: ', responseData);

        dispatch({type:REGISTER, payload:responseData});

    } catch(error) {
        console.log("ERROR: ", error);
    }
}

export const login = (data) => async(dispatch) => {
    try {
        const response = await fetch(`${BASE_YYTAPI}/auth/signin`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(data)
        });
        const responseData = await response.json();

        console.log('User: ', responseData);

        dispatch({type:LOGIN, payload:responseData});

    } catch(error) {
        console.log("ERROR: ", error);
    }
}

export const currUser = (token) => async(dispatch) => {
    console.log('current-user: ', token);
    try {
        const response = await fetch(`${BASE_YYTAPI}/api/users/profile`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });
        const responseData = await response.json();

        console.log('token: ', responseData);

        dispatch({type:REQ_USER, payload:responseData});

    } catch(error) {
        console.log("ERROR: ", error);
    }
}

export const searchUser = (data) => async(dispatch) => {
    try {
        const response = await fetch(`${BASE_YYTAPI}/api/users/search/${data.keyword}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token}`,
            },
        });
        const responseData = await response.json();

        console.log('search: ', responseData);

        dispatch({type:SEARCH_USER, payload:responseData});

    } catch(error) {
        console.log("ERROR: ", error);
    }
}

export const updateUser = (data) => async(dispatch) => {
    try {
        const response = await fetch(`${BASE_YYTAPI}/api/users/update/${data.id}`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${data.token}`,
            },
        });
        const responseData = await response.json();

        console.log('search: ', responseData);

        dispatch({type:UPDATE_USER, payload:responseData});

    } catch(error) {
        console.log("ERROR: ", error);
    }
}

export const logout = () => async(dispatch) => {
    localStorage.removeItem('token');
    dispatch({type: LOGOUT, payload:null});
    dispatch({type:REQ_USER, payload:null});

} 