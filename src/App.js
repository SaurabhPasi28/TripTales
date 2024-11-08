import './App.css';
import React, {useState} from 'react';
import TourCard from './components/TourCard';
import data from './Data/TourData'
function App() {
  const [tours,settours]=useState(data);
  function removeTour(id){
    const newTours=  tours.filter(tour=>tour.id!==id);
    settours(newTours);
  }
  
  if(tours.length===0){
     return (
      <div className='flex flex-col justify-center gap-6 items-center w-full h-[100vh]'>
       <h1 className='text-red-700 text-4xl m-2'>No Tours Left</h1>
       <button className='text-center text-2xl text-white p-2 font-bold bg-blue-700 px-5 mx-6 rounded-lg' onClick={()=>settours(data)}>Refresh</button>
      </div>
     )
  }
  return (
    <div className='flex flex-col items-center gap-6 h-fit bg-gray-300'>
      <div className='text-5xl m-8 border-dashed border-4 rounded-2xl border-blue-600 p-3 px-12'>
        <h1>Plan with Love</h1>
      </div>

      <div className='flex flex-wrap justify-evenly gap-8 w-[90%]'>
        {
          tours.map((tour)=>{
            return <TourCard tour={tour} removeTour={removeTour} />
          })
        }
      </div>
    </div>
  );
}

export default App;
