import React from 'react'
import Containercard from '../components/Containercard';
const Pop = () => {
  return (
    <div
    className="w-full h-screen overflow-hidden"
    style={{
      backgroundImage: `url(https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_1200/v1611852647/blog-post-open-graph-covers/000/006/579/6579-original.png?1611852647)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    }}
  >
        <Containercard /> 
    <div className="flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-4xl font-bold text-white mb-4"></h1>
   
    </div>
  </div>
  )
}

export default Pop