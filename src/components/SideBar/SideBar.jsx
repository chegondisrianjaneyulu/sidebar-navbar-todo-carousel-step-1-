import React, {useState} from 'react'
import Chevron from 'react-chevron'

export default function SideBar({item}) {
const [open, setOpen] = useState(false)

if(item.childrens){
   return (
    <div className={`text-white block rounded-sm pl-3 `}>
        <div className='flex flex-row justify-between hover:bg-neutral-700'>
            <span className='self-center'>{item.title}</span>
            <button className={` ${open ? 'rotate-90' : ''}`} onClick={() => setOpen(!open)}><Chevron/></button>
        </div>

        <div className={open ? 'h-auto pt-0.5 pl-0.5': 'pt-0.5 pl-0.5 h-0 overflow-hidden'}>
            {item.childrens.map((child, index) => <SideBar key={index} item={child}/>)}
        </div>
    </div>
   )
}else{
    return (
        <a className='text-white hover:bg-neutral-700 pl-3  block'>{item.title}</a>
    )
}

}
