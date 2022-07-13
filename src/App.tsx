import { ChangeEvent, FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import iTodo from './interfaces/Todo';
import logo from './logo.svg';
import { useSelector } from './store';
import { createTodoThunk, deleteTodoThunk, fetchTodosThunk } from './store/actions/todo.actions';

function App() {
  const [todo, setTodo] = useState<iTodo | null>({
    id: '',
    title: '',
    completed: false,
    created: new Date(),
    description: ''
  });
  const dispatch = useDispatch();
  const refId = useRef<HTMLInputElement>(null)

  const todos = useSelector(({ todos }) => todos);

  const handleTodoCreate = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    //@ts-ignore
    setTodo({ ...todo, [name]: value });
  }

  useEffect(() => {
    fetchTodosThunk()(dispatch);
  }, [])

  /**
   * Deleta um todo pelo id
   * @param id id do todo
   */
  const deleteTodo = (id: number) => {
    deleteTodoThunk()(dispatch, id)
  }

  /**
   * Cria um todo novo
   * @param e FormEvent
   */
  const createTodo = (e: FormEvent) => {
    e.preventDefault();
    createTodoThunk()(dispatch, todo!)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form onSubmit={createTodo} className="form-create-todo">
          <input type="text" name='title' onChange={(e) => handleTodoCreate(e)} placeholder='Titulo do todo' />
          <textarea name='description' onChange={(e) => handleTodoCreate(e)} placeholder='Descrição do todo' />
          <button type='submit'>Create todo</button>
        </form>
        <p>Hello Vite + React!</p>
        {todos && todos.map((el: iTodo) => (
          <div key={el.id} className='card-todo' onClick={() => deleteTodo(Number(el.id))} >
            <p>id: {el.id}<br /> title: {el.title}</p>
            <p>{el.description}</p>
          </div>
        ))}
      </header>
    </div>
  )
}

export default App
