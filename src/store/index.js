import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose  } from "redux";
import thunk from 'redux-thunk';
import { todo } from "./reducers/todo.js";
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || compose;
export const store = createStore(combineReducers({
    newTodo: todo
}), composeEnhancers(applyMiddleware(thunk)));

export default store;