import './App.css';
import logo from './logo.svg';
import store from './store';
import { useSelector } from 'react-redux'
import { useRef, useState } from 'react';

function App() {
  const [todo, setTodo] = useState('');
  const { newTodo } = useSelector(state => state);
  const refId = useRef(null)

  const createTodo = () => {
    store.dispatch({
      type: 'create',
      payload: {
        id: Math.max(...ids) + 1,
        title: todo
      }
    })
  }

  const deleteTodo = (id) => {
    store.dispatch({
      type: 'delete',
      payload: Number(id)
    })
  }

  const ids = newTodo.todos.map(object => {
    return object.id;
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {newTodo.todos.map(el => (
          <p key={el.id}>id: {el.id}<br /> title: {el.title}</p>
        ))}
        <div>
          <input type="text" onChange={(e) => setTodo(e.target.value)} placeholder='title todo' />
          <input type="number" ref={refId} placeholder='id para deletar' />
        </div>
        <button onClick={createTodo}>Create todo</button>
        <button onClick={(e) => deleteTodo(refId.current.value)}>Delete todo</button>
      </header>
    </div>
  )
}

export default App
