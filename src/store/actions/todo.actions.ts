import axios from 'axios';
import iTodo from '../../interfaces/Todo';
export const CREATE = 'create';
export const DELETE = 'delete';
export const LOADING_SUCCESS = 'loading success';
export const LOADING_REQUEST = 'loading request';


export const create = (todo: string) => {
    return {
        type: CREATE,
        payload: {
            title: todo
        }
    }
}

export const loadingRequest = () => {
    return {
        type: LOADING_REQUEST
    }
}

export const loadingSuccess = (todos: iTodo) => {
    return {
        type: LOADING_SUCCESS,
        payload: {todos}
    }
}

export const errorRequest = (messageError: string) => {
    return {
        type: LOADING_SUCCESS,
        payload: messageError
    }
}

export const remove = (id: string) => {
    return {
        type: 'delete',
        payload: Number(id)
    }
}

export const fetchTodosThunk = (dispatch: any) => {
    axios.get('http://localhost:3001/todos').then(response => {
        dispatch(loadingSuccess(response.data));
    }).catch(error => {
        dispatch(errorRequest(error.message));
    })
}