import React from "react";
import ReactDOM from "react-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import ReactApp from "./modules/components/ReactApp";
import rootReducer from "./modules/reducers";


let middleware = [ thunkMiddleware ];
if(process.env.NODE_ENV == "development"){
    middleware.push(createLogger());
}

let store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

ReactDOM.render(
    <Provider store={store}>
        <ReactApp />
    </Provider>,
    document.getElementById("react")
);