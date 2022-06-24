import { legacy_createStore as createStore } from "redux";
import { combineReducers } from 'redux'
import { todoReducer } from "../reducers/todoReducer";

export const store = createStore(combineReducers({
    newTodo: todoReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

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