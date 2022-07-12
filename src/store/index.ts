import { TypedUseSelectorHook } from "react-redux";
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducers } from "./reducers/index.js";

// Importamos applyMiddleware do Redux, para poder adicionar Thunk ou Saga como Middleware
import { useSelector as useReduxSelector } from "react-redux";

const rootReducer = reducers;

export type IRootState = ReturnType<typeof rootReducer>;

// Tipamos o hook useSelector
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector

export const store = createStore(
    rootReducer, composeWithDevTools(applyMiddleware(thunk)) // Aqui vamos aplicar os middlewares
)


export default store;