import axios from 'axios';
export const CREATE = 'create';
export const DELETE = 'delete';
export const LOADING_SUCCESS = 'loading success';
export const LOADING_REQUEST = 'loading request';


export const create = (todo) => {
    return {
        type: 'create',
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

export const loadingSuccess = (todos) => {
    return {
        type: LOADING_SUCCESS,
        payload: {todos}
    }
}

export const remove = (id) => {
    return {
        type: 'delete',
        payload: Number(id)
    }
}