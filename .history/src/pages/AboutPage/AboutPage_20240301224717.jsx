import bannerImg from '../../assets/about_banner.webp';
import logoGratPlace from '../../assets/logo_greatPlace.webp';
import CountUp from 'react-countup';
import { values, executiveTeam } from '../../helpers/const.js';
import ExecutiveTeam from '../../components/ExecutiveTeam/ExecutiveTeam.jsx';
import OurValues from '../../components/OurValues/OurValues.jsx';
import CounterData from '../../components/CounterData/CounterData.jsx';

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
      <CounterData />
      <OurValues />
      <section className="flex flex-col justify-center items-center p-20 gap-10">
        <h2 className="text-3xl font-semibold">Where we are</h2>
        <main className="flex flex-col lg:flex-row gap-40">
          <div className="flex flex-row justify-center items-center gap-6">
            <div
              className="w-[310px] h-[310px] flex flex-col justify-center items-center gap-5"
              style={{ background: '#D7E0E5' }}
            >
              <h2
                className="text-3xl font-semibold"
                style={{ color: '#2E5172' }}
              >
                Offices
              </h2>
              <div className="w-1/4 border-b-2 border-blue-900"></div>
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
              className="w-[310px] h-[310px] flex flex-col justify-center items-center gap-5"
              style={{ background: '#D7E0E5' }}
            >
              <h2
                className="text-3xl font-semibold"
                style={{ color: '#2E5172' }}
              >
                Showrooms
              </h2>
              <div className="w-1/4 border-b-2 border-blue-900"></div>
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
      <ExecutiveTeam />
    </>
  );
}
