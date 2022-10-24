import React from 'react';

const Button = (props) => {
  return (
    <button
      className="border w-36 border-purple-500 rounded-2xl py-2 bg-purple-400 font-semibold text-xl shadow-md hover:bg-purple-500"
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
