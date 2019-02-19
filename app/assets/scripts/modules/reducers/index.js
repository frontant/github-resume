import { combineReducers } from "redux";
import userData from "./userData";
import repositories from "./repositories";
import cache from "./cache";

export default combineReducers({
    userData,
    repositories,
    cache
});