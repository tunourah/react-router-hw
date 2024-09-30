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
          boxShadow:'inset 0 0 0 2000px rgba(0,0,0,0.5)'
      }}
    >
          <Containercard /> 
          <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4  p-2 border  shadow-lg">
          {" "}
          Wave Patterns
        </h1>
        <p className=" text-white mb-4">
        Abstract representations of ocean waves, emphasizing their motion and beauty.
        </p>
      </div>
    </div>
  );
};

export default Seabg;
