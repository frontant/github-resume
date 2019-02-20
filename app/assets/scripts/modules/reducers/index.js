import { combineReducers } from "redux";
import userData from "./userData";
import repositories from "./repositories";
import languages from "./languages";
import cache from "./cache";

export default combineReducers({
    userData,
    repositories,
    languages,
    cache
});