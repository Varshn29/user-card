import { combineReducers } from "redux";
import { singleUserReducer } from "./singleUserReducer";

export const reducer = combineReducers({
    singleUser: singleUserReducer
})