import './App.css';
import logo from './logo.svg';
import store from './store';
import { useSelector } from 'react-redux'

function App() {

  const { newTodo } = useSelector(state => {
    return state;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        {newTodo.todos.map(el => (
          <p key={el.title}>{el.title}</p>
        ))}

        <button onClick={() => store.dispatch({ type: 'create', payload: { id: 2, tile: 'Todo 2' } })}>Create todo</button>
        <button onClick={() => store.dispatch({ type: 'delete', payload: 1 })}>Delete todo</button>
      </header>
    </div>
  )
}

export default App
