import { combineReducers } from "redux";
import { todo } from "./todo";

export const reducers = combineReducers({
    newTodos: todo
})