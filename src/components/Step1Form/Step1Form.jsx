import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
// import {PhoneInputWithCountry} from "react-phone-number-input/react-hook-form"

export default function Step1Form() {
   const [value, setValue] = useState()

   console.log(value)

  return (
    <div className='h-screen flex flex-col justify-center items-start ml-8 space-x-2 w-1/2'>
      <h1 className='text-5xl font-bold'>Begin your booking</h1>
      <p className='my-10'>Thank you for choosing HolidayKeepers. Please enter accurate details to help us host a perfect holiday experience.</p>

      <div className='flex flex-row mb-10 space-x-5 '>
        <TextField  id="outlined-basic"  label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      </div>
        
      <div className='flex flex-row space-x-5'>
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <PhoneInput international  displayInitialValueAsLocalNumber className='outline-none border-2 rounded-lg p-1'   defaultCountry="US" placeholder="Enter phone number" value={value} onChange={setValue}/>
      </div>

      <button className='self-center mt-7 w-28 h-10 font-semibold rounded-sm bg-red-500 text-white'>Next</button>
      
    </div>
  )
}
