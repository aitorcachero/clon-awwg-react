import React from 'react';

export default function Header({ img, text }) {
  return (
    <header className="w-full lg:h-[425px] overflow-hidden mt-24 flex justify-center items-center relative">
      <img src={img} className="object-cover h-64 lg:h-full lg:w-full" />
      <p
        className="absolute text-6xl font-extrabold text-white text-center"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        {text}
      </p>
    </header>
  );
}
