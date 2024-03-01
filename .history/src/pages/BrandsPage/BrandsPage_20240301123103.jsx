import React from 'react';

export default function BrandsPage() {
  return (
    <>
      <header className="w-full relative mt-24 h-[420px] overflow-hidden object-center flex flex-col items-center justify-center">
        <img src="../../../public/brands.webp" />
        <p
          className="absolute text-6xl font-extrabold text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Brands
        </p>
      </header>
    </>
  );
}
