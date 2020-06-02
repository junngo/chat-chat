// Imports
import { API_URL } from "../../constants";
import { AsyncStorage } from "react-native";
import { func } from "prop-types";


// Actions
const LOG_IN = "LOG_IN";
const SET_USER = "SET_USER";
const LOG_OUT = "LOG_OUT";


// Action Creators
const setLogIn = token => {
    return {
        type: LOG_IN,
        token
    }
}

const setUser = user => {
    return {
        type: SET_USER,
        user
    }
}

const logOut = () => {
    return {
        type: LOG_OUT
    }
}


// API Actions
function login(username, password) {
    return dispatch => {
        fetch(`${API_URL}/rest-auth/login/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        .then(response => response.json())
        .then(json => {
            if (json.token) {
                dispatch(setLogIn(json.token));
            }
            if (json.user) {
                dispatch(setUser(json.user));
            }
        });
    };
}


// Initial State
const initialState = {
    isLoggedIn: false
};


// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case LOG_IN:
            return applyLogIn(state, action);
        case SET_USER:
            return applySetUser(state, action);
        case LOG_OUT:
            return applyLogOut(state, action);
        default:
            return state;
    }
}

// Reducer Functions
function applyLogIn(state, action) {
    const { token } = action;

    return {
        ...state,
        isLoggedIn: true,
        token
    };
}

function applySetUser(state, action) {
    const { user } = action;

    return {
        ...state,
        profile: user
    }
}


function applyLogOut(state, action) {
    AsyncStorage.clear();

    return {
        ...state,
        isLoggedIn: false,
        token: ""
    };
}


// Exports
const actionCreators = {
    login,
    logOut
};

export { actionCreators };

// Default Reducer Export

export default reducer;
