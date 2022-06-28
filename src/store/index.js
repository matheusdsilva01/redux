import { legacy_createStore as createStore } from "redux";
import { combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { todo } from "./reducers/todo.js";

export const store = createStore(combineReducers({
    newTodo: todo
}), applyMiddleware(thunk));

// const store = createStore((
//     (state, action) => {
//         console.log({ state, action });
//         return {
//             todos: []
//         }
//     }),
//     // @ts-ignore
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

export default store;