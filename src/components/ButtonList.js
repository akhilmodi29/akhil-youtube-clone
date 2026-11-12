import React from 'react';
import Button from "./Button";

const list = ["All", "Gaming", "Songs", "Live", "Soccer", "Cricket", "Cooking", "News", "Sports", "Football", "Gadgets", "Music", "New to you"];

const ButtonList = () => {
  return (
    <div className="flex overflow-x-auto whitespace-nowrap scrollbar-hide">
      {list.map((name) => (
        <Button key={name} name={name}/>
      ))}
    </div>
  )
}

export default ButtonList;