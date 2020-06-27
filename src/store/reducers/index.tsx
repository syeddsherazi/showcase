import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// Reducers
import global from "./global";

const appReducer = (history) =>
    combineReducers({
        global,
        router: connectRouter(history),
    });

const rootReducer = (history) => (state, action) => {
    return appReducer(history)(state, action);
};

export default rootReducer;
