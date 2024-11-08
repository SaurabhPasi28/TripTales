import React, { useState } from 'react'

function TourCard({tour,removeTour} ) {
    const [readmore,setReadmore]=useState(false);
    const description= readmore ? tour.info : `${tour.info.substring(0,100)}....`

    function readHandler(){
        setReadmore(!readmore); 
    }

    
  return (
    <div className='p-2 w-80 h-fit bg-white rounded-lg transition-all border-solid border-2 hover:border-blue-600'>
        <img className='h-[15rem] w-[100%] rounded-lg' src={tour.image} alt={tour.name}></img>

        <div className='p-1'>
           <h4 className='text-green-600'>{tour.price}</h4>
           <h4 className="text-red-500 font-bold">{tour.name}</h4>
        </div>

        <div className='px-1 text-justify'>
            {description}
            <span className='text-blue-600 cursor-pointer' onClick={readHandler}>
                {readmore ? `show less`: `read more`}
            </span>
        </div>

        <div className='flex justify-center' >
            <button className='text-center w-full text-white p-2 font-bold bg-blue-700 my-2 mx-6 rounded-lg' onClick={()=>removeTour(tour.id)}>Not Interested</button>
        </div>
    </div>
  )
}

export default TourCard;