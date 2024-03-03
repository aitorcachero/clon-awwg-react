import ButtonComponent from '../ButtonComponent/ButtonComponent';

export default function BrandComponent({ brand }) {
  return (
    <section className="bg-white flex flex-col w-full justify-center items-center mt-20 gap-10 animate-slide-up-fade">
      <img src={brand.imgBrand} className="text-black" />
      {brand.text.map((texto, i) => {
        return (
          <p className="w-full p-4 lg:p-0 lg:w-[1200px] text-justify" key={i}>
            {texto}
          </p>
        );
      })}
      <div className="relative flex flex-col w-full lg:flex-row lg:w-[1200px] gap-4">
        {brand.banner.map((brand, i) => {
          return (
            <>
              <div key={i} className="relative">
                7
                <img src={brand.img} className="w-auto h-auto p-4 lg:p-0 " />
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
                  <ButtonComponent text="GO TO SITE" />
                </a>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
}
