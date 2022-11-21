import React, {useState, useEffect} from 'react'
import axios from 'axios'
import TodoAxiousApiDisplayData from '../TodoAxiousApiDisplayData/TodoAxiousApiDisplayData'

const client = axios.create({baseURL:'https://jsonplaceholder.typicode.com/todos/'})


export default function TodoAxiousApi() {
const [todoData, setTodoData] = useState([])
const [addTodo, setAddTodo] = useState('')

 useEffect(() => {
   client.get('?_limit=10')
   .then((response) => {setTodoData(response.data)})
 },[])

 const onClickSubmit = (e) => {
    e.preventDefault()
    client.post('',{completed:false,title:addTodo})
    .then((response) => {setTodoData([...todoData, response.data])})
    setAddTodo('')
 }

 const onClickDelete = (id) => {
    client.delete(`${id}`)
    setTodoData(todoData.filter((todoItem) => {
     return todoItem.id !== id
    })
    )
 }
 
 const onChangeToggle = (id) => {
 }
 
  console.log(todoData)
 //https://jsonplaceholder.typicode.com/todos/
 
  return (
    <div className='flex flex-col items-center w-screen'>
        <form onSubmit={onClickSubmit}>
            <input type="text" onChange={(e) => setAddTodo(e.target.value)} className='border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border p-3 w-96 m-3 hover:border-black' placeholder='Add Task'/>
            <button type="submit" className='border-2 border-black text-black hover:text-slate-600 cursor-pointer p-2 rounded-md hover:border-slate-600'>Add Task</button>
        </form>
        <ul className='w-1/2'>
            {todoData.map((todo,index) => (
                <TodoAxiousApiDisplayData onChangeToggle={onChangeToggle} onClickDelete={onClickDelete} key={index} index={todo.id} todo={todo} />
            ))}
        </ul>
    </div>
  )
}
