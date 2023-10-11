import React from 'react'
import { Todo } from '../Model'
import SingleTodo from './SingleTodo';
interface Props{
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList = ({todos, setTodos}:Props) => {
  return (
    <div className='flex flex-row flex-wrap max-sm:flex-col max-sm::flex-1 gap-3 mb-4'>
        {
            todos.map((todo)=>(
               <SingleTodo todo={todo} key={todo.id}
               todos={todos} setTodos={setTodos}/>
            ))
        }
    </div>
  )
}

export default TodoList