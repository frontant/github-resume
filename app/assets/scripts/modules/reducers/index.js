import { combineReducers } from "redux";
import userData from "./userData";
import repositories from "./repositories";

export default combineReducers({
    userData,
    repositories
});