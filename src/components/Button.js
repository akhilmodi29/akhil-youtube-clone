import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({name}) => {
  const target = name === "All" ? "/" : `/results?search_query=${encodeURIComponent(name)}`;
  return (
    <Link to={target}>
      <button className='px-4 py-1.5 m-2 bg-[#272727] text-white hover:bg-[#3f3f3f] rounded-lg text-sm font-medium transition'>
        {name}
      </button>
    </Link>
  )
}

export default Button;