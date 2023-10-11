import {useState} from 'react'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import {MdDone} from 'react-icons/md'
import { Todo } from '../Model'
import TodoList from './TodoList'

type Props = {
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo, todos, setTodos} : Props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    const handleDone = (id:number)=>{
        setTodos(todos.map((todo)=> (todo.id === id)? {...todo, isDone:!todo.isDone}:todo))
    }
    const handleDelete = (id:number)=>{
       setTodos(todos.filter((todo)=> todo.id !== id))
    }
    const handleEdit = (e: React.FormEvent, id: number)=>{
        e.preventDefault()
        setTodos(todos.map((todo)=>
        (todo.id === id)? {...todo, todo: editTodo}: todo
        ))
        setEdit(false)
    }
  return (
    <form onSubmit={(e)=>handleEdit(e, todo.id)} className='w-[420px] max-sm:w-[300px] flex justify-between p-4 bg-gradient-to-r from-yellow-500 to-orange-500 mt-2 shadow-lg shadow-gray-500 rounded-sm'>
        {
            edit? <input type='text' value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/> :
           ( todo.isDone ? 
            (<s className='font-neucha text-xl'>{todo.todo}</s>):
            (
            <span className='font-neucha text-xl'>{todo.todo}</span> 
            ))
        }

        
        <div className='flex flex-row justify-center items-center gap-2'>
            <span className='cursor-pointer' onClick={()=>{if(!edit && !todo.isDone){setEdit(!edit)}}}><AiFillEdit/></span>
            <span className='cursor-pointer' onClick={()=>handleDelete(todo.id)}><AiFillDelete/></span>
            <span className='cursor-pointer' onClick={()=>handleDone(todo.id)}><MdDone/></span>
        </div>
    </form>
  )
}

export default SingleTodo