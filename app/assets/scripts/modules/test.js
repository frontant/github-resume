import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

import rootReducer from "./reducers";
import { fetchUserData, fetchRepositories, fetchLanguages } from "./actions";

let middleware = [ thunkMiddleware ];

if(process.env.NODE_ENV == "development"){
    middleware.push(createLogger());
}

let store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
);

// TEST 1
let runTest = true;
let unsubscribe = store.subscribe(() => {
    let state = store.getState();

    // request languages
    if(state.repositories.data.length > 0 && runTest){
        runTest = false;
        store.dispatch(fetchLanguages(state.repositories.data[0].id));
    }
});

//store.dispatch(fetchUserData("frontend"));
store.dispatch(fetchRepositories("frontant", 2));
