import React from "react";
import Containercard from "../components/Containercard";
const Classic = () => {
  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        backgroundImage: `url(https://cdn.britannica.com/78/43678-050-F4DC8D93/Starry-Night-canvas-Vincent-van-Gogh-New-1889.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        boxShadow: "inset 0 0 0 2000px rgba(0,0,0,0.5)",
      }}
    >
      <Containercard />
      <div className="flex flex-col justify-center items-center h-full text-center">
        <h1 className="text-4xl font-bold text-white mb-4  p-2 border  shadow-lg">
          {" "}
          Classic Art
        </h1>
        <p className=" text-white mb-4">
          Traditional art styles from various art movements.
        </p>
      </div>
    </div>
  );
};

export default Classic;
