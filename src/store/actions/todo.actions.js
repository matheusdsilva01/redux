import axios from 'axios';
import { useSelector } from 'react-redux'
export const CREATE = 'create';
export const DELETE = 'delete';
export const CREATE_SUCCESS = 'create sucess';

// const { newTodo } = useSelector(state => state);
// const ids = newTodo && newTodo.todos.map(object => {
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
export const createSuccess = (todos) => {
    return {
        type: CREATE_SUCCESS,
        payload: {todos}
    }
}

export const createOrder = () => async (dispatch) => {
    const { data } = await axios.get('http://localhost:3001/todos');
    console.log(data);
    dispatch(createSuccess(data))
}


export const remove = (id) => {
    return {
        type: 'delete',
        payload: Number(id)
    }
}