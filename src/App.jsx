import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import logo from './logo.svg';
import { create, remove, loadingSuccess, createOrderLoadingSuccess, loadingRequest } from './store/actions/todo.actions';

function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();

  const todos = useSelector(({ newTodo }) => {
    return newTodo.todos;
  });
  
  function loadingTodos() {
    dispatch(loadingRequest());
    createOrderLoadingSuccess()(dispatch);
  }
  const refId = useRef(null)

  return (
    <div className="App" onLoad={loadingTodos} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {todos && todos.map(el => (
          <p key={el.id}>id: {el.id}<br /> title: {el.title}</p>
        ))}
        <div>
          <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder='title todo para adicionar' />
          <input type="number" ref={refId} placeholder='id para deletar' />
        </div>
        <button onClick={() => dispatch(create(todo))}>Create todo</button>
        <button onClick={() => dispatch(remove(refId.current.value))}>Delete todo</button>
      </header>
    </div>
  )
}

export default App
