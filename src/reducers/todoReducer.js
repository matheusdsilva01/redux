const CREATE = 'create';
const DELETE = 'delete';

const initialState = {
    todos: [
        {
            id: 1,
            title: 'Todo 1'
        },
        {
            id: 2,
            title: 'todo 2'
        }
    ]
}

export const todoReducer = (state = initialState, action) => {

    switch (action.type) {
        case CREATE:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    { ...action.payload }
                ]
            }
        case DELETE:
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.payload)
            }
        default:
            return state;
    }
}
