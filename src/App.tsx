import React, { useState } from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model';






const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])
console.log(todo);
console.log(todos);

  const handleAdd = (e:React.FormEvent) => {
    e.preventDefault()
    if(todo.trim().length === 0){
     return;
    }else{
      setTodos([...todos,{id:Date.now(),todo,isDone:false}]);
      setTodo("");
    };
      

      
  };
  
  return (
    <div className="App">
      <span className='heading'>Todo List</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
     <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
