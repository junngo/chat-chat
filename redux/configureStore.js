import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import thunk from "redux-thunk";
import user from "./modules/user";
import chat from "./modules/chat";

const middlewares = [thunk];

const persistConfig = {
    key: "root",
    storage: AsyncStorage
};

const reducer = persistCombineReducers(persistConfig, {
    user,
    chat
});

const configureStore = () => {
    let store = createStore(reducer, applyMiddleware(...middlewares));
    let persistor = persistStore(store);

    return { store, persistor };
};

export default configureStore;
