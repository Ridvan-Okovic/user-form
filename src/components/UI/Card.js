import React from 'react';

const Card = (props) => {
  return (
    <div className="container max-w-2xl mx-auto bg-white  rounded-2xl shadow-xl font-mono border border-slate-200">
      {props.children}
    </div>
  );
};

export default Card;
