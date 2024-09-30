import React from 'react'
import Containercard from '../components/Containercard';
const Abstract = () => {
  return (
    <div
    className="w-full h-screen overflow-hidden"
    style={{
      backgroundImage: `url(https://d1ee3oaj5b5ueh.cloudfront.net/thumbs/1440xAUTO_processed_article_2021_07_60ec5a5781c6c.webp)`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
        boxShadow:'inset 0 0 0 2000px rgba(0,0,0,0.5)'
    }}
  >
        <Containercard /> 
        <div className="flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-4xl font-bold text-white mb-4  p-2 border  shadow-lg"> Abstract Art

 </h1>
 <p className=' text-white mb-4'>Vibrant colors and shapes that create a dynamic look.
</p>
   
    </div>
  </div>
  )
}

export default Abstract