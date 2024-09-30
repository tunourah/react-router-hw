import React from 'react';
import Cards from './Cards';

const Containercard = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
       
      <div className=' grid grid-cols-5 sm:flex  sm:flex-row mx-auto w-full max-w-6xl gap-4 p-4    '>
        <Cards 
          title="Sea Art" 
          btn=" 🧜🏻"
          link="/sea"
        />
        <Cards 
          title="Digital Art" 
          btn="💿" 
          link ="/digitalart"
        />
        <Cards 
          title="Classic Art" 
          btn="🎻" 
           link="/Classic"
        />
        <Cards 
          title="Abstract Art" 
          btn="〰️" 
           link="/Abstract"
        />
        <Cards 
          title="Pop Art" 
          btn="🍾" 
           link="/pop"
        />
      </div>
    </div>
  );
};

export default Containercard;
