import React from 'react';
import { Link } from 'react-router-dom';

const Cards = (props) => {
  return (
    <Link 
      to={props.link}  // Navigates to the specific page
      className="flex justify-center items-center w-full h-12 border border-dotted border-black   shadow-md bg-white text-black text-sm font-bold hover:bg-gray-300 transition"
    >
        {props.title}
      {props.btn}
    </Link>
  );
};

export default Cards;
