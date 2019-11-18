import React, { useReducer } from 'react';
import { initialState, reducer } from './reducer/reducer';
import './App.css';
import TodoList from './components/TodoList';
import TodoInterface from './components/TodoInterface';

function App() {

  const [todos, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
     <TodoList list={todos} dispatch={dispatch}/>
     <TodoInterface dispatch={dispatch} />
    </div>
  );
}

export default App;
