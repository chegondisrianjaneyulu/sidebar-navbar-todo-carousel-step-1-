import React, {useState} from 'react'

export default function QuickBookNavbar() {
  const [open, setOpen] = useState(false)
  const [openSetting, setOpenSetting] = useState(false)
  const [openQuestion, setOpenQuestion] = useState(false)

  const displayAddSection = () => {
    return (
      <div className='absolute top-16  bg-slate-400'>
            <h1 className='text-gray-500'>Opened Add Section</h1>
      </div>
    )
  }

  const displaySettingSection = () => {
    return (
      <div className='absolute top-16 bg-slate-400'>
        <h1>Opened Setting Section</h1>
      </div>
    )
  }

  const displayQuestionSection = () => {
    return (
      <div className='absolute top-16 right-0 bg-slate-400'>
        <h1>Open Question Mark Section</h1>
      </div>
    )
  }



  return (
    <header className='bg-black sm:p-7  lg:p-4  flex flex-row justify-between  items-center'>
      <svg className='text-slate-400 hover:text-lime-500 hover:scale-95  cursor-pointer sm:w-5 sm:h-5 lg:w-8 lg:h-8' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
       <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

 <div className='flex space-x-5 justify-between'>
    
    <div>
        <svg onClick={() => setOpen(!open)} className=" hover:text-lime-500 text-slate-400 h-full hover:scale-90   sm:w-5 sm:h-5 lg:w-8 lg:h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {open ? displayAddSection() : ''}
    </div>
      
      <svg  className=" text-slate-400 hover:scale-90 hover:text-lime-500   sm:w-5 sm:h-5 lg:w-8 lg:h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
       <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
       
    <div>
      <svg onClick={() => setOpenSetting(!openSetting)}  className=" text-slate-400 hover:text-lime-500  hover:scale-90 sm:w-5 sm:h-5 lg:w-8 lg:h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
      {openSetting ? displaySettingSection() : ''}
    </div>

    <div>
      <svg onClick={() => setOpenQuestion(!openQuestion)} className=" text-slate-400 hover:text-lime-500 hover:scale-90  sm:w-5 sm:h-5 lg:w-8 lg:h-8 cursor-pointer" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
      {openQuestion ? displayQuestionSection() : ''}
    </div>

   </div>
 </header>
)
}
