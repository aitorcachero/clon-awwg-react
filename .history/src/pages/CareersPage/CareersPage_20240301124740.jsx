import bannerImg from '../../assets/banner_careers.webp';

export default function CareersPage() {
  return (
    <>
      <header className="w-full relative mt-24 h-[420px] overflow-hidden object-center flex flex-col items-center justify-center">
        <img src="../../../public/banner_careers.webp" />
        <p
          className="absolute text-6xl font-extrabold text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          Careers
        </p>
      </header>
      <section className="flex flex-row h-[300px] p-[40px] gap-20 items-center justify-center mt-10 animate-slide-in-right">
        <img src="../../../public/logo_greatPlace.webp" className="h-full" />
        <div className="flex flex-col w-[600px]">
          <p className="h-full ">
            Every step taken is a step taken together. We’re a team and family.
            We value perseverance. We’re all driven by the same passion, the
            desire to overcome and break down barriers. Because as a team we’re
            able to truly make a difference and outdo ourselves each and every
            day.
          </p>
          <br />
          <p>
            Joining AWWG means a lot more than being part of a group, it means
            trust, inspiration, growth and motivation. Because our teams view
            challenges as an opportunity to evolve, they’re ready to embrace the
            future. Our community is the living personification of our values
            and the engine moving our brands.
          </p>
        </div>
      </section>
      <h1
        className="text-3xl font-bold text-center"
        style={{ color: '#305374' }}
      >
        Our divisions
      </h1>
      <section className="flex flex-row justify-center items-center gap-20 my-20">
        <article className="flex flex-col w-[370px] h-[580px] relative">
          <img
            src="../../../public/careers1.webp"
            className="w-[370px] h-[580px]"
          />
          <div className="absolute flex flex-col w-[370px] h-[580px] justify-around items-center gap-48">
            <h2 className="text-white text-3xl font-bold w-[100px] text-center">
              Office careers
            </h2>
            <button className="text-white rounded border-2 font-semibold border-white py-2 px-6 hover:bg-white hover:text-black">
              Find more
            </button>
          </div>
        </article>
        <article className="flex flex-col w-[370px] h-[580px] relative">
          <img
            src="../../../public/careers2.webp"
            className="w-[370px] h-[580px]"
          />
          <div className="absolute flex flex-col w-[370px] h-[580px] justify-around items-center gap-48">
            <h2 className="text-white text-3xl font-bold w-[100px] text-center">
              Retail careers
            </h2>
            <button className="text-white rounded border-2 font-semibold border-white py-2 px-6 hover:bg-white hover:text-black">
              Find more
            </button>
          </div>
        </article>
        <article className="flex flex-col w-[370px] h-[580px] relative">
          <img
            src="../../../public/careers3.webp"
            className="w-[370px] h-[580px]"
          />
          <div className="absolute flex flex-col w-[370px] h-[580px] justify-around items-center gap-48">
            <h2 className="text-white text-3xl font-bold w-[100px] text-center">
              Intership & graduate program
            </h2>
            <button className="text-white rounded border-2 font-semibold border-white py-2 px-6 hover:bg-white hover:text-black">
              Find more
            </button>
          </div>
        </article>
      </section>
    </>
  );
}
