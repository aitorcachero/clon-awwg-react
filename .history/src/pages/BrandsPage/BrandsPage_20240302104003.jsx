import brandsBanner from '../../assets/brands.webp';
import Header from '../../components/Header/Header';
import { brands } from '../../helpers/const.js';

export default function BrandsPage() {
  return (
    <>
      <Header img={brandsBanner} text="Brands" />
      {brands.map((brand, i) => {
        return (
          <section
            className="bg-white flex flex-col w-full justify-center items-center mt-20 gap-10 animate-slide-up-fade"
            key={i}
          >
            <img src={brand.imgBrand} className="text-black" />
            {brand.text.map((texto, i) => {
              return (
                <p
                  className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify"
                  key={i}
                >
                  {texto}
                </p>
              );
            })}
            {brand.banner.map((brand, i) => {
              return (
                <div
                  className="relative flex flex-col lg:flex-row flex-auto w-[1200px]"
                  key={i}
                >
                  <img
                    src={brand.img}
                    className="w-auto h-64 p-4 lg:p-0 lg:h-auto"
                  />
                  <a
                    href={brand.url}
                    target="_blank"
                    className="absolute  left-1/2"
                    style={{
                      bottom: '20px',
                      left: '50%',
                      transform: 'translate(-50%, -20%)',
                    }}
                  >
                    <button className="px-6 py-2 border-2 rounded border-white text-white font-bold hover:bg-white hover:text-black hover:underline">
                      GO TO SITE
                    </button>
                  </a>
                </div>
              );
            })}
          </section>
        );
      })}
    </>
  );
}
