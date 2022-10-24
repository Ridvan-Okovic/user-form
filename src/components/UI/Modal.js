import React from 'react';
import Button from './Button';

const Modal = (props) => {
  return (
    <div>
      <div
        className="fixed top-0 left-0 h-full w-full backdrop-blur-sm backdrop-brightness-50 z-10"
        onClick={props.onConfirm}
      />
      <div className="fixed w-4/12 bg-white rounded-xl top-1/3 flex flex-col left-1/3 overflow-hidden z-20">
        <header className="text-3xl font-extrabold w-full py-3 bg-purple-400 flex justify-start px-5 mx-auto">
          <h2>{props.title}</h2>
        </header>
        <div className="px-5 py-3 mt-6 text-xl">
          <p>{props.message}</p>
        </div>
        <footer className="flex justify-end mr-5 py-4">
          <Button onClick={props.onConfirm}>Okay!</Button>
        </footer>
      </div>
    </div>
  );
};

export default Modal;
