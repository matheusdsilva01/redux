import { applyMiddleware, compose, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from "./reducers/index.js";
import createSagaMiddleware from "redux-saga";
import sagas from "./sagas/todo.saga.js";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, compose(
    applyMiddleware(sagaMiddleware),
    composeWithDevTools()
));

sagaMiddleware.run(sagas)

export default store;