import React from 'react';

export default function ButtonComponent({ text }) {
  return (
    <button className="px-6 py-2 border-2 rounded border-white text-white font-bold hover:bg-white hover:text-black hover:underline">
      {text}
    </button>
  );
}
