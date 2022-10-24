import React from 'react';

const User = (props) => {
  return (
    <div className="bg-purple-400 my-6 p-4 shadow-xl flex space-x-2 font-mono rounded-xl text-2xl border border-purple-500">
      <div className="">{props.name}</div>
      <div className="">({props.age} years old)</div>
    </div>
  );
};

export default User;
