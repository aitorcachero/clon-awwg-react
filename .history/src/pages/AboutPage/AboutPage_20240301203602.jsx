import bannerImg from '../../assets/about_banner.webp';
import logoGratPlace from '../../assets/logo_greatPlace.webp';
import CountUp from 'react-countup';
import { values } from '../../helpers/const.js';

export default function AboutPage() {
  return (
    <>
      <header className="w-full lg:h-[425px] overflow-hidden mt-24 flex justify-center items-center relative">
        <img
          src={bannerImg}
          className="object-cover h-64 lg:h-full lg:w-full"
        />
        <p
          className="absolute text-6xl font-extrabold text-white text-center"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          About us
        </p>
      </header>
      <section className="flex flex-col lg:flex-row lg:h-[300px] p-[40px] gap-20 items-center justify-center mt-20 animate-slide-in-right h-full ">
        <img src={logoGratPlace} className="h-full" />
        <div className="flex flex-col w-full lg:w-[600px]">
          <p className="h-full text-center ">
            AWWG is the global fashion group which integrates the brands Pepe
            Jeans London, Hackett and Façonnable, and is the licensed
            distributor for Tommy Hilfiger and Calvin Klein in Spain and
            Portugal. We’re a group that loves challenges, pushing the limits
            and defying the status quo.
          </p>
        </div>
      </section>
      <section
        className="lg:w-full lg:h-[300px] p-20 flex flex-col lg:flex-row lg:p-0 justify-center items-center gap-20"
        style={{ backgroundColor: '#2E5172' }}
      >
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">
            +<CountUp end={4500} duration={2.75} />
          </h2>
          <h5>Employees worldwide</h5>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">
            <CountUp end={66} duration={2.75} />
          </h2>
          <h5>Nationalities</h5>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">
            +<CountUp end={500} duration={2.75} />
          </h2>
          <h5>Brand stores</h5>
        </div>
        <div className="flex flex-col justify-center items-center text-white gap-4">
          <h2 className="text-6xl font-bold">
            +<CountUp end={5000} duration={2.75} />
          </h2>
          <h5>Points of sale</h5>
        </div>
      </section>
      <section
        className="lg:w-full  flex flex-col justify-center items-center p-4 lg:p-20 gap-10"
        style={{ backgroundColor: '#D7E0E5' }}
      >
        <h2 className="text-2xl font-bold" style={{ color: '#2E5172' }}>
          Our Values
        </h2>
        <main className="w-full lg:w-[1200px]  grid lg:grid-cols-3 text-white gap-10 lg:gap-0">
          {values.map((value, i) => {
            return (
              <article key={i} className="flex flex-col h-[310px]">
                <main
                  style={{ backgroundColor: value.bgColor }}
                  className="h-1/2 w-full flex flex-col justify-center items-start gap-4 px-10"
                >
                  <h2 className="text-3xl font-semibold">{value.title}</h2>
                  <p>{value.text}</p>
                </main>
                <div className="h-1/2 w-full">
                  <img src={value.img} className="w-full h-full" />
                </div>
              </article>
            );
          })}
        </main>
      </section>
      <section className="flex flex-col justify-center items-center p-20 gap-10">
        <h2 className="text-3xl font-semibold">Where we are</h2>
        <main className="flex flex-col lg:flex-row gap-40">
          <div className="flex flex-row justify-center items-center gap-6">
            <div
              className="w-[310px] h-[310px] flex justify-center items-center"
              style={{ background: '#D7E0E5' }}
            >
              <h2
                className="text-3xl font-semibold"
                style={{ color: '#2E5172' }}
              >
                Offices
                <div className="w-full h-1 border border-black"></div>
              </h2>
            </div>
            <article>
              <p>
                Madrid (HQ)
                <br />
                Barcelona
                <br />
                Elche
                <br />
                London
                <br />
                Amsterdam
                <br />
                Mexico City
                <br />
                Mumbai
              </p>
            </article>
          </div>
          <div className="flex flex-row justify-center items-center gap-6">
            <div
              className="w-[310px] h-[310px] flex justify-center items-center"
              style={{ background: '#D7E0E5' }}
            >
              <h2
                className="text-3xl font-semibold"
                style={{ color: '#2E5172' }}
              >
                Showrooms
              </h2>
            </div>
            <article>
              <p>
                Madrid (HQ)
                <br />
                Munich
                <br />
                Hamburg
                <br />
                Düsseldorf
                <br />
                Paris
                <br />
                Milan
                <br />
                Lisbon
                <br />
                Zurich
                <br />
                Salzburg
                <br />
                Budapest
                <br />
                Warsaw
              </p>
            </article>
          </div>
        </main>
      </section>
    </>
  );
}
