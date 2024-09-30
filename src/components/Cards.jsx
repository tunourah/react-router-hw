import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
    <Link 
      to={props.link}  // Navigates to the specific page
      className="flex flex-col justify-center items-center w-full h-20   border-4 border-dotted border-black animate-border rounded-lg shadow-md bg-white text-black text-xs sm:text-sm font-bold hover:bg-gray-300 transition-transform transform hover:scale-105 p-2"
    >
      <p className="mb-1">{props.title}</p> 
      <h6 className="text-gray-600">{props.btn}</h6>
    </Link>
  );
};

export default Cards;
