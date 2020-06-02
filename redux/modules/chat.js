// Imports
import { API_URL } from "../../constants";
import { actionCreators as userActions } from "./user";

// Actions
const CREATE_ROOM = "CREATE_ROOM";

// Action Creators


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


// Initial State
const initialState = {}

// Reducer
function reducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state;
    }
}


// Reducer Functions


// exports
const actionCreators = {
    createChatRoom
}

export { actionCreators };


// export reducer by default

export default reducer;
