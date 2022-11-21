import React, {useState, useRef } from 'react'
import Chevron from 'react-chevron'


const cardss = [
  {id:1, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider1700hk.webp' , title:'$ $ 17.200'},
  {id:2, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/farmhouse_1735.webp' , title:'$ $ 17.200'},
  {id:3, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp' , title:'$ $ 17.200'},
  {id:4, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider34s.webp' , title:'$ $ 17.200'},
  {id:5, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/738-PA-196.webp' , title:'$ $ 17.200'},
  {id:6, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp' , title:'$ $ 17.200'},
  {id:7, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider1700hk.webp' , title:'$ $ 17.200'},
  {id:8, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/farmhouse_1735.webp' , title:'$ $ 17.200'},
  {id:9, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp' , title:'$ $ 17.200'},
  {id:10, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp' , title:'$ $ 17.200'},
  {id:11, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider1700hk.webp' , title:'$ $ 17.200'},
  {id:12, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/farmhouse_1735.webp' , title:'$ $ 17.200'},
  {id:13, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp' , title:'$ $ 17.200'},
  {id:14, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider1700hk.webp' , title:'$ $ 17.200'},
  {id:15, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/farmhouse_1735.webp' , title:'$ $ 17.200'},
  {id:16, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp' , title:'$ $ 17.200'},
  {id:17, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider34s.webp' , title:'$ $ 17.200'},
  {id:18, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/738-PA-196.webp' , title:'$ $ 17.200'},
  {id:19, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp' , title:'$ $ 17.200'},
  {id:20, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider1700hk.webp' , title:'$ $ 17.200'},
  {id:21, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/farmhouse_1735.webp' , title:'$ $ 17.200'},
  {id:22, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/sliderproperty_252.webp' , title:'$ $ 17.200'},
  {id:23, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Property-267.webp' , title:'$ $ 17.200'},
  {id:24, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/slider1700hk.webp' , title:'$ $ 17.200'},
  {id:25, imageUrl: 'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/farmhouse_1735.webp' , title:'$ $ 17.200'},
]

export default function Carousel() {
  const [startIndex, setStartIndex] = useState(0)
  const [endIndex, setEndIndex] = useState(cardss.length)

  const cards = cardss.slice(startIndex,endIndex)

  const onClickNextButton = () => {
     if(startIndex >= 0){
         setStartIndex(startIndex + 1)
     }else{
      setStartIndex(0)
     }
  }

  const onClickPrevButton = () => {
     if (startIndex === 0) {
       setStartIndex(0)
       setEndIndex(cardss.length)
     }else{
      setStartIndex(startIndex - 1)
     }
  }
  
  
  return (
    <div className='flex  items-center relative'>
     <button className=' h-full absolute w-7  left-0 mr-0.5' type="button" onClick={onClickPrevButton}>
     <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
      </svg>
     </button>
     
          <ul className='flex flex-row ml-4 truncate overflow-hidden w-screen relative'>
              {cards.map((card,index) => (
                <li className='w-52  m-3 shrink-0 shadow-lg ' key={index}>
                  <img src={card.imageUrl} />
                  <p className='mt-5'>From</p>
                  <p className='pb-10'><span className='text-black font-bold pr-0.5'>{card.title}</span>Per Night</p>
                </li>
              ))}
          </ul>
     
      <button className='h-full absolute right-0' type="button" onClick={onClickNextButton}>
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" classname="bi bi-chevron-compact-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
      </svg>
      </button>
    </div>
  )
}
