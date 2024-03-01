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
      <section className="bg-white flex flex-col justify-center items-center mt-20 gap-10 animate-slide-up-fade">
        <img src="../../../public/pepe-jeans-2.webp" className="text-black" />
        <p className="w-[1200px] text-justify">
          Pepe Jeans London has been at the forefront of international denim-led
          fashion for the past 50 years, being able to create an internationally
          recognized brand with a unique strategy and reputation. This has been
          possible thanks not only to the great Pepe Jeans team but also to the
          commitment to create the best possible collections and the most
          exciting retail environments while remaining sincere to the brand’s
          DNA and in particular the roots in London’s Portobello Road. Pepe
          Jeans London has also collaborated with the most iconic celebrities
          such as Kate Moss, Sienna Miller, Alexa Chung, Cara Delevingne,
          Georgia Jagger or Dua Lipa, in the hottest multimedia marketing
          campaigns.
        </p>
        <div className="relative">
          <img
            src="../../../public/brands-pepe-jeans.webp"
            className="w-[1200px]"
          />
          <a
            href="https://www.pepejeans.com/?utm_source=awwg_site"
            target="_blank"
            className="absolute  left-1/2"
            style={{
              bottom: '20px',
              left: '50%',
              transform: 'translate(-50%, -0%)',
            }}
          >
            <button className="px-6 py-2 border-2 rounded border-white text-white font-bold hover:bg-white hover:text-black hover:underline">
              GO TO SITE
            </button>
          </a>
        </div>
      </section>
    </>
  );
}
