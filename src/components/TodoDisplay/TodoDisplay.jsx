import React from 'react'

export default function TodoDisplay({item,index,onClickDelete,onClickComplete}) {

  const clicked = () => {
    onClickComplete(index)
  }

  const clickedDelete = () => {
    onClickDelete(index)
  }
  
  return (
    <li className='flex flex-row justify-around items-center border-2 p-3 mt-2 border-black'>
        <p className={`${item.completed ? 'line-through' : ''}`}>{item.title}</p>
        <button onClick={clicked} type="button" className='cursor-pointer hover:text-white bg-slate-600 text-black rounded-sm p-1'>{item.completed? 'Complted' : 'Incompleted'}</button>
        <button onClick={clickedDelete} className='bg-red-600 text-white w-5 h-7 '>x</button>
    </li>
  )
}
