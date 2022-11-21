import React, {useState} from 'react'
import DateTimeRangePicker from '@wojtekmaj/react-datetimerange-picker'

export default function CheckInCheckOut() {
  const [value, onChange] = useState(new Date())
  
 console.log(onChange)
  return (
    <div className='flex flex-row items-center justify-center h-full'>
       <DateTimeRangePicker onChange={onChange} value={value} />
    </div>
  )
}
