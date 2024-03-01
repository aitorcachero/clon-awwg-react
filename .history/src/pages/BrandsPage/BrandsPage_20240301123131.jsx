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
      <section className="bg-white flex flex-col justify-center items-center mt-20 gap-10">
        <img src="../../../public/hackett-london.webp" className="text-black" />
        <p className="w-[1200px] text-justify">
          It all started in 1983 when Jeremy Hackett opened his first store
          selling second-hand clothes on the King’s Road, Chelsea. It was here
          that he began then creating his own garments, by merging traditional
          styles with modern cuts, perfect for those seeking the Savile Row
          style but brought to today: craftsmanship combined with a unique
          British twist. Hackett has achived that by focusing on its
          personality, which is what makes it truly unique. Hackett is defined
          by its excellence and craftsmanship and has its mind set on leaving a
          mark. Today, Hackett boasts collaborations with like-minded partners
          such as Aston Martin, Henley Royal Regatta and British Army Polo.
        </p>
        <div className="relative">
          <img
            src="../../../public/hackett-brands.webp"
            className="w-[1200px]"
          />
          <a
            href="https://www.hackett.com/es/home?utm_source=awwg_site"
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
      <section class="bg-white flex flex-col justify-center items-center mt-20 gap-10">

    <img src='../../../public/façonnable-logo-brands.webp' class="text-black"/>
    <div class="flex flex-col gap-4">

      <p class="w-[1200px] text-justify">The French men’s prêt à porter brand first set up shop in 1950, on the Côte d’Azur.</p>

      <p class="w-[1200px] text-justify">


        Its unique collection of bright, colourful garments, in a range of smart-casual styles, is still made in Nice to this day. The brand is inspired by the typical lifestyle of this region nestled between the Mediterranean and Nice’s hinterland. It immortalises the values that have been passed down through the years while adding its own modern touch.
      </p>
      <p class="w-[1200px] text-justify">

        It offers a complete male wardrobe featuring quality materials and immaculate details that lend its garments a tailored, nautical, sporty air.
      </p>

    </p>
  </div>
    <div class="relative">
      <img src="../../../public/façonnable-brands.webp" class="w-[1200px]"/>
      <a href="https://www.faconnable.com/?utm_source=awwg_site" target="_blank" class="absolute  left-1/2" style={{bottom: '20px', left:'50%', transform: 'translate(-50%, -0%)'}}>
        <button class="px-6 py-2 border-2 rounded border-white text-white font-bold hover:bg-white hover:text-black hover:underline" >GO TO SITE</button>
      </a>
    </div>
  </section>
    </>
  );
}
