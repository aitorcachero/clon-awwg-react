import { sustainability } from '../../helpers/const';
import sustainabilityBanner from '../../assets/sustainability.webp';

export default function SustainabilityPage() {
  return (
    <>
      <header className="w-full lg:h-[425px] overflow-hidden mt-24 flex justify-center items-center relative">
        <img src={sustainabilityBanner} className="object-center h-64" />
        <h1
          className="absolute text-white text-7xl font-bold"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Sustainability
        </h1>
      </header>
      <div className="flex flex-col justify-center items-center mt-20 gap-10">
        <p className="w-full lg:w-[1200px] text-center">
          At AWWG, we are taking action to make our organisation more
          sustainable, inclusive, and competitive. For this reason, social and
          environmental concerns are integrated into our supply chain and wider
          business strategy.
        </p>
        <h1 className="text-3xl font-bold" style={{ color: '#305374' }}>
          Sustainability
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <main className="grid grid-cols-1 lg:grid-cols-2 my-20 gap-10 w-[1200px] animate-slide-up-fade">
          {sustainability.map((section, i) => {
            return (
              <article
                className="flex flex-col w-full lg:w-[510px] gap-6"
                key={i}
              >
                <div className="relative">
                  <img src={section.img} />
                  <p
                    className="absolute text-white text-4xl font-bold"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    {section.name}
                  </p>
                </div>
                <p className="w-full p-4 text-justify lg:p-0">{section.text}</p>
              </article>
            );
          })}
        </main>
      </div>
    </>
  );
}
