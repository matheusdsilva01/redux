import iTodo from '../../interfaces/Todo';
import { CREATE, DELETE, LOADING_SUCCESS, LOADING_REQUEST } from '../actions/todo.actions';


const initialState = {
    todos: []
}

export const todo = (state = initialState, action: { type: any; payload: any; }) => {

    const ids = state.todos && state.todos.map((object: iTodo) => {
        return object.id;
    });
    switch (action.type) {
        case CREATE:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { id: state.todos.length ? Math.max(...ids) + 1 : 1, ...action.payload }
                ]
            }
        case DELETE:
            return {
                ...state,
                todos: state.todos.filter((el: iTodo) => el.id !== action.payload)
            }
        case LOADING_SUCCESS:
            return {
                ...state,
                todos: action.payload.todos
            }
        case LOADING_REQUEST:
            return {
                ...state
            }
        default:
            return state;
    }
}
