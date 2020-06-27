import { createStore, applyMiddleware } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import PromiseMiddleware from "redux-promise-middleware";
import { composeWithDevTools } from "redux-devtools-extension";
import Thunk from "redux-thunk";
import reducers from "./reducers";

export const history = createBrowserHistory();
const router = routerMiddleware(history);
const composeEnhancers = composeWithDevTools({});

const middleware = composeEnhancers(applyMiddleware(PromiseMiddleware, Thunk, router));

export default function configureStore() {
    const store = createStore(reducers(history), middleware);
    return store;
}
