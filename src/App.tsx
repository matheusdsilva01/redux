import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import iTodo from './interfaces/Todo';
import logo from './logo.svg';
import { useSelector } from './store';
import { create, fetchTodosThunk, remove } from './store/actions/todo.actions';

function App() {
  const [todo, setTodo] = useState('');
  const dispatch = useDispatch();
  const refId = useRef<HTMLInputElement>(null)

  const todos = useSelector(({ todos }) => todos);

  function loadingTodos() {
    fetchTodosThunk(dispatch);
  }


  return (
    <div className="App" onLoad={loadingTodos} >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {todos && todos.map((el: iTodo) => (
          <p key={el.id}>id: {el.id}<br /> title: {el.title}</p>
        ))}
        <div>
          <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder='title todo para adicionar' />
          <input type="number" ref={refId} placeholder='id para deletar' />
        </div>
        <button onClick={() => dispatch(create(todo))}>Create todo</button>
        <button onClick={() => dispatch(remove(refId.current?.value!))}>Delete todo</button>
      </header>
    </div>
  )
}

export default App