import './App.css';
import logo from './logo.svg';
import store from './store';
import { useSelector, useDispatch } from 'react-redux'
import { create, remove } from './store/actions/todo.actions'
import { useRef, useState } from 'react';

function App() {
  const dispatch = useDispatch();
  const [todo, setTodo] = useState('');
  const todos = useSelector(state => {
    return state.newTodo.todos;
  });
  const refId = useRef(null)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {todos.map(el => (
          <p key={el.id}>id: {el.id}<br /> title: {el.title}</p>
        ))}
        <div>
          <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder='title todo' />
          <input type="number" ref={refId} placeholder='id para deletar' />
        </div>
        <button onClick={() => dispatch(create(todo))}>Create todo</button>
        <button onClick={() => dispatch(remove(refId.current.value))}>Delete todo</button>
      </header>
    </div>
  )
}

export default App
