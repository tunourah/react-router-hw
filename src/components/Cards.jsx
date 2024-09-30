import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
    <Link 
      to={props.link}  // Navigates to the specific page
      className="  flex flex-col justify-center items-center w-full h-14 border border-dotted border-black      shadow-md bg-white text-black text-xs sm:text-sm font-bold hover:bg-gray-300 transition-transform transform hover:scale-105"
    >
      <p> {props.title}</p> 
   <h6>   {props.btn}</h6>
    </Link>
  );
};

export default Cards;
