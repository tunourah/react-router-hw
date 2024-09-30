import React from 'react';
import Containercard from '../components/Containercard';

const Seabg = () => {
  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(https://c4.wallpaperflare.com/wallpaper/1016/709/172/sea-asia-waves-artwork-japanese-art-hd-wallpaper-preview.jpg)`,
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
