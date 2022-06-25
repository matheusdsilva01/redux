import { useSelector } from 'react-redux'
export const CREATE = 'create';
export const DELETE = 'delete';

// const { newTodo } = useSelector(state => state);
// const ids = newTodo.todos.map(object => {
//     return object.id;
// });

export const create = (todo) => {
    return {
        type: 'create',
        payload: {
            title: todo
        }
    }
}


export const remove = (id) => {
    return {
        type: 'delete',
        payload: Number(id)
    }
}