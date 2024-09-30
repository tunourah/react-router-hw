import React from 'react';
import Containercard from '../components/Containercard';

const Seabg = () => {
  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(https://i.pinimg.com/564x/d9/e0/75/d9e07514128c66974ce306e25f1d7062.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
          <Containercard /> 
      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4">🧜🏻</h1>
     
      </div>
    </div>
  );
};

export default Seabg;
