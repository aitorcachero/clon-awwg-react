import brandsBanner from '../../assets/brands.webp';
import pepeJeansBrand from '../../assets/pepe-jeans-2.webp';
import brandsPepeJean from '../../assets/brands-pepe-jeans.webp';
import hacketLondon from '../../assets/hackett-london.webp';
import hacketBrands from '../../assets/hackett-brands.webp';
import façonnableLogoBrands from '../../assets/façonnable-logo-brands.webp';
import façonnableBrands from '../../assets/façonnable-brands.webp';
import pvhLogo from '../../assets/pvh-logo-brands.webp';
import tommyBrands from '../../assets/tommy-brands.webp';
import ckBrands from '../../assets/ck-brands.webp';

export default function BrandsPage() {
  return (
    <>
      <header className="w-full lg:h-[425px] overflow-hidden mt-24 flex justify-center items-center relative">
        <img
          src={brandsBanner}
          className="object-center h-64 lg:h-full lg:w-full"
        />
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
      <section className="bg-white flex flex-col w-full justify-center items-center mt-20 gap-10 animate-slide-up-fade">
        <img src={pepeJeansBrand} className="text-black" />
        <p className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify">
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
          <img src={brandsPepeJean} className="w-[1200px]" />
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
        <img src={hacketLondon} className="text-black" />
        <p className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify">
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
          <img src={hacketBrands} className="w-[1200px]" />
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
      <section className="bg-white flex flex-col justify-center items-center mt-20 gap-10">
        <img src={façonnableLogoBrands} className="text-black" />
        <div className="flex flex-col gap-4">
          <p className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify">
            The French men’s prêt à porter brand first set up shop in 1950, on
            the Côte d’Azur.
          </p>

          <p className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify">
            Its unique collection of bright, colourful garments, in a range of
            smart-casual styles, is still made in Nice to this day. The brand is
            inspired by the typical lifestyle of this region nestled between the
            Mediterranean and Nice’s hinterland. It immortalises the values that
            have been passed down through the years while adding its own modern
            touch.
          </p>
          <p className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify">
            It offers a complete male wardrobe featuring quality materials and
            immaculate details that lend its garments a tailored, nautical,
            sporty air.
          </p>
        </div>
        <div className="relative">
          <img src={façonnableBrands} className="w-[1200px]" />
          <a
            href="https://www.faconnable.com/?utm_source=awwg_site"
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
      <section className="bg-white flex flex-col justify-center items-center mt-20 gap-10 mb-20">
        <img src={pvhLogo} className="text-black" />
        <div className="flex flex-col gap-4">
          <p className="w-[1200px] text-justify">
            Tommy Hilfiger is one of the world’s leading designer lifestyle
            brands and is internationally recognized for celebrating the essence
            of classic American cool style, featuring preppy with a twist
            designs. In 1993 Tommy Hilfiger arrives to Europe, settling in Spain
            with the help of AWWG.
          </p>
          <p className="w-[1200px] text-justify">
            Calvin Klein is a global lifestyle brand that exemplifies bold,
            progressive ideals and a seductive, and often minimal, aesthetic. We
            seek to thrill and inspire our audience while using provocative
            imagery and striking designs to ignite the senses. In 2013 an
            agreement was reached with PVH to distribute Calvin Klein in Spain
            and Portugal.
          </p>
        </div>
        <div className="flex flex-row w-[1200px] h-[366px] gap-12">
          <div className="relative h-full">
            <img src={tommyBrands} className="w-[1200px] h-full" />
            <a
              href="https://es.tommy.com/?utm_source=awwg_site"
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
          <div className="relative h-full">
            <img src={ckBrands} className="w-[1200px] h-full" />
            <a
              href="https://www.calvinklein.es/?utm_source=awwg_site"
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
        </div>
      </section>
    </>
  );
}
