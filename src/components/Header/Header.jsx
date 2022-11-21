import React from 'react'
import {CgProfile} from 'react-icons/cg'
export default function Header() {
  return (
    <header className='self-start w-full order-2  bg-gray-300 shadow-lg flex flex-row p-4 justify-end space-x-2'>
        <button className='flex flex-row items-center p-1 border-l-0 border-2 border-y-0'>
            <CgProfile className='h-8 w-8 pr-0.5'/> Sign in
        </button>
        <p className='self-center'>Help</p>
    </header>
  )
}
import { FaBeer } from 'react-icons/fa'