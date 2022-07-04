import axios from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects'
import { loadingSuccess, LOADING_REQUEST } from '../actions/todo.actions';

function* createOrderLoadingSuccess() {
    const { data } = yield call(axios.get, 'http://localhost:3001/todos');
    yield put(loadingSuccess(data))
}

export default function* sagas() {
    yield takeLatest(LOADING_REQUEST, createOrderLoadingSuccess)
}