import axios from 'axios';
import iTodo from '../../interfaces/Todo';
export const CREATE = 'create';
export const DELETE = 'delete';
export const ERROR = 'error';
export const LOADING_SUCCESS = 'loading success';
export const LOADING_REQUEST = 'loading request';

/**
 * Faz a criação de um Todo no state local
 * @param todo Todo to create
 * @returns 
 */
const create = (todo: iTodo) => {
    return {
        type: CREATE,
        payload: todo
    }
}

const loadingRequest = () => {
    return {
        type: LOADING_REQUEST
    }
}

const loadingSuccess = (todos: iTodo[]) => {
    return {
        type: LOADING_SUCCESS,
        payload: {todos}
    }
}

export const errorRequest = (messageError: string) => {
    return {
        type: ERROR,
        payload: messageError
    }
}

/**
 * Efetua uma requisição para deletar um Todo pelo id informado como parametro e refaz a query para recuperar os Todos
 * @returns 
 */
export const deleteTodoThunk = () => (dispatch: any, idTodo: number ) => {
    dispatch(loadingRequest())
    axios.delete(`http://localhost:3001/todos/${idTodo}`).then(response => {
        fetchTodosThunk()(dispatch)
    }).catch(error => { 
        dispatch(errorRequest(error))
    })
}

/**
 * Faz o post na API e retorna o todo criado, para ser adicionado a lista de todos do reducer
 * @returns 
 */
export const createTodoThunk = () => async (dispatch: any, todo: iTodo) => {
    dispatch(loadingRequest())
    axios.post('http://localhost:3001/todos', todo).then((response) => {
        dispatch(create(response.data))
    }).catch(error => {
        dispatch(errorRequest(error.message))
    })
}
/**
 * Faz uma requisição a API para obter todos os todos
 * @returns 
 */
export const fetchTodosThunk = () => async (dispatch: any) => {
    dispatch(loadingRequest())
    axios.get('http://localhost:3001/todos').then(response => {
        dispatch(loadingSuccess(response.data));
    }).catch(error => {
        dispatch(errorRequest(error.message));
    })
}