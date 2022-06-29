import { CREATE, DELETE, CREATE_SUCCESS } from '../actions/todo.actions';


const initialState = {
    todos: []
}

export const todo = (state = initialState, action) => {

    const ids = state.todos && state.todos.map(object => {
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
                todos: state.todos.filter((el) => el.id !== action.payload)
            }
        case CREATE_SUCCESS:
            console.log(action.payload.todos);
            return {
                ...state,
                todos: action.payload.todos
            }
        default:
            return state;
    }
}
