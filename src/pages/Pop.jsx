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
        boxShadow:'inset 0 0 0 2000px rgba(0,0,0,0.5)'
    }}
  >
        <Containercard /> 
        <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4  p-2 border  shadow-lg">
          {" "}
          Pop Art
        </h1>
        <p className=" text-white mb-4">
        Bright, bold imagery that draws from popular culture.
        </p>
      </div>
  </div>
  )
}

export default Pop