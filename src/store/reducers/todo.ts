import iTodo from '../../interfaces/Todo';
import { CREATE, DELETE, LOADING_SUCCESS, LOADING_REQUEST, ERROR } from '../actions/todo.actions';


const initialState = {
    isLoading: true,
    todos: [],
    error: undefined
}

export const todo = (state = initialState, action: { type: any; payload: any; }) => {

    switch (action.type) {
        case CREATE:
            return {
                ...state,
                isLoading: false,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }
        case DELETE:
            return {
                ...state,
                isLoading: false,
                todos: state.todos.filter((el: iTodo) => el.id !== action.payload)
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                isLoading: false,
                error: undefined,
                todos: action.payload.todos
            }
        case LOADING_REQUEST:
            return {
                ...state,
                isLoading: true,
            }
        case ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
