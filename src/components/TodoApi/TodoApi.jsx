import React, {useState, useEffect} from 'react'
import TodoDisplay from '../TodoDisplay/TodoDisplay'



export default function TodoApi() {
 const [task, setTask] = useState([])
 const [addTask, setAddTask] = useState("")

 const [pending, setPending] = useState(0)

 useEffect(() => {
    setPending(task.filter(tas => !tas.completed).length)
 })

 //https://jsonplaceholder.typicode.com/todos/


 
const onClickSave = () => {
    localStorage.setItem("data", JSON.stringify(task))
}

 const onSubmitTask = (e) => {
    e.preventDefault()
    let newTask = [...task, {title:addTask,completed:false}]
    if (!addTask)return
    setTask(newTask)
    setAddTask("")
 }

 const onClickComplete = (index) => {
    let newTasks = [...task]
    newTasks[index].completed = true
    setTask(newTasks)
    console.log(`click completed ${index} ${newTasks[index].title}`)
 }

const onClickDelete = (index) => {
    let newTasks = [...task]
    newTasks.splice(index,1)
    setTask(newTasks)
    console.log(`deleted index ${index} title ${newTasks[index].title}`)
}



  return (
    <>
    <div className='flex flex-col items-center justify-center h-screen'>
        <h1>Todo Items</h1>
        <form onSubmit={onSubmitTask}>
            <input onChange={(e) => setAddTask(e.target.value)}  type="text" className='border-slate-300 rounded-lg focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 border p-3 w-96 m-3 hover:border-black' placeholder='Add Task' />
            <button type="submit"  className='border-2 border-black text-black hover:text-slate-600 cursor-pointer p-2 rounded-md hover:border-slate-600'>Add Task</button>
       </form>
        <h1> Pending Tasks {pending}</h1>
      <ul className='border-black p-3 hover:border-slate-600 border-2 rounded-lg shadow-lg mt-5 w-2/6 '>
        {task.map((item,index )=> (
            <TodoDisplay item={item} index={index} onClickDelete={onClickDelete} onClickComplete={onClickComplete} key={index}/>
        ))}
      </ul>
      <button onClick={onClickSave} type="button" className='border-2 border-black text-black hover:text-slate-600 cursor-pointer p-2 mt-5 rounded-md hover:border-slate-600'>Save</button>
    </div>
    
  </>
  )
}
