import React from 'react'

export default function TodoAxiousApiDisplayData({todo,index,onClickDelete,onChangeToggle}) {


  return (
    <li className='flex flex-row m-1 items-center'>
        <p className='mr-2'>{index}</p>
        <input onChange={() => onChangeToggle(todo.id)}  type="checkbox" className='mr-2' checked = {todo.completed ? true : false} />
        <p>{todo.title}</p>
        <button  type="button" onClick={() => onClickDelete(todo.id) } className='border-2 hover:text-slate-600 ml-2 p-1 rounded-md border-black hover:border-slate-600'>Delete</button>
    </li>
  )
}
