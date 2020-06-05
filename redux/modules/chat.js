// Imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions
const SET_HOME_IMAGE = "SET_HOME_IMAGE"

// Action Creators
function setHomeImage(home) {
    return {
        type: SET_HOME_IMAGE,
        home
    }
}

// API Actions
function createChatRoom(params) {
    return (dispatch, getState) => {
        const { user: { token }} = getState()
        return fetch(`${API_URL}/chat/room/`, {
            method: "POST",
            headers: {
              Authorization: `JWT ${token}`
            }
        }).then(response => {
            if (response.status === 401) {
                dispatch(userActions.logOut());
                return false
            } else if (response.ok) {
                return true;
            } else {
                return false;
            }
        });
    };
}

function getHome() {
    return (dispatch, getState) => {
        const { user: { token } } = getState();

        fetch(`${API_URL}/images/home/`, {
            headers: {
                Authorization: `JWT ${token}`
            }
        }).then(response => {
            if (response.status === 401) {
                dispatch(userActions.logOut());
            } else {
                return response.json();
            }
        }).then(json => dispatch(setHomeImage(json)));
    };
}


// Initial State
const initialState = {}

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_HOME_IMAGE:
            return applySetHomeImage(state, action);
        default:
            return state;
    }
}


// Reducer Functions
function applySetHomeImage(state, action) {
    const { home } = action;
    return {
        ...state,
        home
    }
}


// exports
const actionCreators = {
    createChatRoom,
    getHome
};

export { actionCreators };


// export reducer by default

export default reducer;
