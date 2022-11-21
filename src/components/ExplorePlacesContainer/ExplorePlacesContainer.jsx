import React from 'react'

const nearByPlaces = [
    {id:1, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Untitled-design-2021-12-23T193622.564-1-phxvv2kicrbl3ys1y70yrri6foq1lj4qc78ehvn776.webp', title:'Blakeslee', description:'A Golfing Haven'},
    {id:2, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Untitled-design-2021-12-23T190826.272-1-phxunmh2gfuggtvznexriq75yiv9t6ndp5ofxg2asy.webp', title:'Plains', description:'Casinos & Resorts'},
    {id:3, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Untitled-design-2021-12-23T192946.864-1-phxvlgnwhq62fgqi21i9a6sjtw2ywwzicn5pw1w2sy.webp', title:'Tobyhanna', description:'Lap of Nature'},
    {id:4, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Untitled-design-2021-12-23T191803.186-1-phxv2z6630v23jl601ue8uq79373j7ljt59y45at6a.webp', title:'Lake Harmony', description:'Water Adventures'},
    {id:5, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Untitled-design-2021-12-23T193007.130-1-phxvlfq2aw4s3urv7j3mpp138i7lp7vs0ii8erxgz6.webp', title:'Palmerton', description:'Waters Edge'},
    {id:6, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/jim-thorpe-poconos.webp', title:'Jim Thorpe', description:'History & Museums'},
    {id:7, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Stroudsburg.webp', title:'Stroudsburg', description:'Art & Shopping'},
    {id:8, imageUrl:'https://cdn.holidaykeepers.com/wp-content/uploads/2022/07/Delaware-Water-Gap-.webp', title:'Delaware', description:'Natures Retreat'}
]

export default function ExplorePlacesContainer() {
  return (
    <div>
        <h1 className='ml-8 text-black font-bold text-2xl'>Explore Nearby</h1>
       <ul className='ml-3 flex flex-row flex-wrap'>
        {nearByPlaces.map((items) => (
            <li className='flex flex-row mx-10 my-6'>
                <img className='rounded-lg h-16 w-20 hover:scale-125 transition-all duration-500 cursor-pointer hover:animate-bounce' src={items.imageUrl}/>
                <div className='ml-4'>
                    <a className='text-black font-bold'>{items.title}</a>
                    <p>{items.description}</p>
                </div>
            </li>
        ))}
       </ul>
    </div>
  )
}
