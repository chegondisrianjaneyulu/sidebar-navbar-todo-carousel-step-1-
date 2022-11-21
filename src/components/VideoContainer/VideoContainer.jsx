import React from 'react'
import ReactPlayer from 'react-player'

export default function VideoContainer() {
  return (
    <div className=' flex flex-row my-9 px-6'>
        <div className='w-3/6 font-medium text-4xl text-black'>
            <h1>Book a luxurious holiday home</h1>
            <ReactPlayer controls thumbnail={'https://cdn.holidaykeepers.com/wp-content/uploads/elementor/thumbs/10-Fish-Species-and-Fishing-Spots-poehu4l4n0lw51ooseglncgk48089ckcafbxu4yr2c.jpg'}  width="400px" height="100px" url={'https://www.youtube.com/watch?v=ysz5S6PUM-U'}/>
        </div>
        <div className='w-3/6 text-black text-lg'><p>We are Holidaykeepers, your global vacation host. We offer exclusive bookable vacation rentals that feature amenities of a hotel and privacy of a home. Choose from our list of magnificent mansions, exclusive cabins, cozy cottages, lake rentals, beach houses and spacious villas. If sheer luxury coupled with popular locations and convenience is what you seek, we have the perfect getaways that await your arrival.</p></div>
    </div>
  )
}
