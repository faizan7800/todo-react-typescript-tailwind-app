import React, {useRef} from 'react'

interface Props{
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent)=> void;
}
const InputField = ({todo, setTodo, handleAdd} : Props) => {
    const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className='flex justify-end items-center' onSubmit={(e)=>{
        handleAdd(e)
        inputRef.current?.blur()
        }}>
        <input type="text" ref={inputRef} placeholder='Enter a Task' className='w-[712px] max-sm:w-[284px] shadow-md font-palanquin ring-1 py-3 rounded-full outline-none text-xl px-6 focus:shadow-gray-500 focus:drop-shadow-2xl' value={todo} onChange={(e)=> setTodo(e.target.value)}/>
        <button type='submit' className='font-montserrat bg-blue-700 p-2 border-0 border-blue-900 absolute rounded-full text-white font-bold mr-2 hover:bg-blue-500 focus:animate-ping shadow-gray-500 shadow-md'>Go</button>
    </form>
  )
}

export default InputField