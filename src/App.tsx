import { useState } from 'react'
import './App.css'
import InputField from './components/InputField'
import TodoList from './components/TodoList'
import { Todo } from './Model'

const App: React.FC = () => {

  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e:React.FormEvent)=>{
    e.preventDefault()


    if(todo){
      setTodos([...todos, {id: Date.now(), todo: todo, isDone: false}])
      setTodo("")
    }
  }

  console.log(todos)
  return (
    <>
      <div className='w-full h-screen flex flex-col justify-start gap-10 items-center font-neucha p-4'>
      <h2 className='text-4xl font-bold text-white leading-7 p-2 tracking-widest'>Taskify</h2>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <div><TodoList todos={todos} setTodos={setTodos}/></div>
      </div>
    </>
  )
}

export default App
