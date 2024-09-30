import React from 'react'
import Containercard from '../components/Containercard';

const Digital = () => {
  return (
    <div
    className="w-full h-screen overflow-hidden"
    style={{
      backgroundImage: `url(https://images.pexels.com/photos/10771000/pexels-photo-10771000.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
        <Containercard /> 
    <div className="flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-4xl font-bold text-white mb-4">Fantasy Landscapes</h1>
   
    </div>
  </div>
  )
}

export default Digital